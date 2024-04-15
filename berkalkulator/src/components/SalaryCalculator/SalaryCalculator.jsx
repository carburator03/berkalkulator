import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Trash2 } from 'lucide-react';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  const updateMembers = () => {
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

  return (
    <div className='bg-pink-400 p-5 flex gap-y-20 flex-col'>
      <div>
        <div className='flex justify-between items-center'>
          <h1>
            <span className='uppercase'>{member.name}</span> BÉRÉNEK KISZÁMÍTÁSA
          </h1>
          <Button size='icon' variant='destructive' onClick={deleteMember}>
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
        />
        <Slider
          value={[member.salary]}
          max={2000000}
          min={0}
          step={1000}
          onValueChange={handleSalaryChangeSlider}
        />
        <div className='flex gap-5'>
          <Button onClick={() => handleSalaryChangeButton(0.95)}>-5%</Button>
          <Button onClick={() => handleSalaryChangeButton(0.99)}>-1%</Button>
          <Button onClick={() => handleSalaryChangeButton(1.01)}>+1%</Button>
          <Button onClick={() => handleSalaryChangeButton(1.05)}>+5%</Button>
        </div>
        <h2>KEDVEZMÉNYEK</h2>
        <div>
          <div className='flex items-center space-x-2'>
            <Switch id='szja' checked={member.young} onCheckedChange={handleYoungSwitch} />
            <Label htmlFor='szja'>25 év alattiak SZJA mentessége</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Switch id='hazasok' checked={member.married} onCheckedChange={handleMarriedSwitch} />
            <Label htmlFor='hazasok'>Friss házasok kedvezménye</Label>
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
        </div>
      </div>
      <div>
        <p>NETTÓ BÉR:</p>
        <div>
          <p>{member.net}</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
