import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MarriedDateDialog } from '../MarriedDateDialog/MarriedDateDialog';
import { Badge } from '@/components/ui/badge';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  const [marriedBenefit, setMarriedBenefit] = useState(member.marriedBenefit);

  useEffect(() => {
    updateMembers();
  }, [member.marriedDate]);

  const updateNetSalary = () => {
    let tax = 0;
    tax += member.salary * 0.185;
    if (!member.young) tax += member.salary * 0.15;
    if (member.young && member.salary > 499952) tax += (member.salary - 499952) * 0.15;
    if (member.personnel) tax < 77300 ? (tax = 0) : (tax -= 77300);
    if (member.family) {
      switch (member.dependent2) {
        case 1:
          tax -= member.dependent * 10000;
          break;
        case 2:
          tax -= member.dependent * 20000;
          break;
        case 3:
          tax -= member.dependent * 33000;
          break;
      }
    }
    member.net = member.salary - parseInt(tax);
    if (member.net < 0) member.net = 0;
    if (member.net > member.salary) member.net = member.salary;
    if (member.married && marriedBenefit) member.net += 5000;
  };

  const updateMembers = () => {
    updateNetSalary();
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  const handleNameChange = e => {
    member.name = e.target.value;
    updateMembers();
  };

  const handleSalaryChange = e => {
    const salary = parseInt(e.target.value) || '';
    if (!isNaN(salary) && salary >= 0 && salary <= 2000000) {
      member.salary = salary;
      updateMembers();
    }
  };

  const handleSalaryChangeSlider = value => {
    member.salary = value[0];
    updateMembers();
  };

  const handleSalaryChangeButton = percent => {
    member.salary = parseInt(member.salary * percent);
    if (member.salary > 2000000) member.salary = 2000000;
    updateMembers();
  };

  const deleteMember = () => {
    setMembers([...members.slice(0, index), ...members.slice(index + 1)]);
  };

  const handleYoungSwitch = e => {
    member.young = e;
    updateMembers();
  };

  const handleMarriedSwitch = e => {
    member.married = e;
    updateMembers();
  };

  const handlePersonnelSwitch = e => {
    member.personnel = e;
    updateMembers();
  };

  const handleFamilySwitch = e => {
    member.family = e;
    updateMembers();
  };

  const handleDependentChange = value => {
    member.dependent += value;
    if (member.dependent < 1) member.dependent = 1;
    updateMembers();
  };

  const handleDependent2Change = value => {
    member.dependent2 += value;
    if (member.dependent2 < 0) member.dependent2 = 0;
    if (member.dependent2 > member.dependent) member.dependent2 = member.dependent;
    if (member.dependent2 > 3) member.dependent2 = 3;
    updateMembers();
  };

  return (
    <div className='p-5 flex gap-y-20 flex-col'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>
            <span className='uppercase'>{member.name}</span> BÉRÉNEK KISZÁMÍTÁSA
          </h1>
          <Button size='icon' variant='destructive' onClick={deleteMember} className='ml-2'>
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
        <Label htmlFor='name'>Családtag neve</Label>
        <Input
          type='text'
          placeholder='Feri'
          defaultValue={member.name}
          onChange={handleNameChange}
          id='name'
          className='border-2 border-primary'
        />
        <Label htmlFor='salary'>Fizetése</Label>
        <Input
          type='text'
          placeholder='250000'
          value={member.salary}
          onChange={e => {
            handleSalaryChange(e);
          }}
          id='salary'
          className='border-2 border-primary'
        />
        <Slider
          value={[member.salary]}
          max={2000000}
          min={0}
          step={1000}
          onValueChange={handleSalaryChangeSlider}
          className='my-4'
        />
        <div className='flex gap-5 justify-center'>
          <Button onClick={() => handleSalaryChangeButton(0.95)}>-5%</Button>
          <Button onClick={() => handleSalaryChangeButton(0.99)}>-1%</Button>
          <Button onClick={() => handleSalaryChangeButton(1.01)}>+1%</Button>
          <Button onClick={() => handleSalaryChangeButton(1.05)}>+5%</Button>
        </div>
        <h2 className='text-lg font-bold my-3'>KEDVEZMÉNYEK</h2>
        <div className='space-y-2'>
          <div className='flex items-center space-x-2'>
            <Switch id='szja' checked={member.young} onCheckedChange={handleYoungSwitch} />
            <Label htmlFor='szja'>25 év alattiak SZJA mentessége</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Switch id='hazasok' checked={member.married} onCheckedChange={handleMarriedSwitch} />
            <Label htmlFor='hazasok'>Friss házasok kedvezménye</Label>
            {member.married && (
              <MarriedDateDialog
                marriedBenefit={marriedBenefit}
                setMarriedBenefit={setMarriedBenefit}
                member={member}
              />
            )}
            {member.married && marriedBenefit && (
              <Badge className='cursor-default bg-green-800'>Jogosult</Badge>
            )}
            {member.married && !marriedBenefit && (
              <Badge className='cursor-default bg-red-800'>Nem jogosult</Badge>
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <Switch
              id='szemelyi'
              checked={member.personnel}
              onCheckedChange={handlePersonnelSwitch}
            />
            <Label htmlFor='szemelyi'>Személyi adókedvezmény</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Switch id='csaladi' checked={member.family} onCheckedChange={handleFamilySwitch} />
            <Label htmlFor='csaladi'>Családi kedvezmény</Label>
          </div>
          {member.family && (
            <div className='flex'>
              <Button
                onClick={() => handleDependentChange(-1)}
                className='w-6 h-6 p-0 rounded-full'
              >
                <Minus className='size-5' />
              </Button>
              <p className='mx-2'>{member.dependent}</p>
              <Button onClick={() => handleDependentChange(1)} className='w-6 h-6 p-0 rounded-full'>
                <Plus className='size-5' />
              </Button>
              <p className='mx-2'>eltartott, ebből kedvezményezett: </p>
              <Button
                onClick={() => handleDependent2Change(-1)}
                className='w-6 h-6 p-0 rounded-full'
              >
                <Minus className='size-5' />
              </Button>
              <p className='mx-2'>{member.dependent2}</p>
              <Button
                onClick={() => handleDependent2Change(1)}
                className='w-6 h-6 p-0 rounded-full'
              >
                <Plus className='size-5' />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className='bg-secondary w-fit mx-auto p-5 text-center rounded-lg border-4 text-lg font-bold'>
        <p className='text-border '>NETTÓ BÉR:</p>
        <div>
          <p>
            {new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(
              member.net,
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
