import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  const handleNameChange = e => {
    member.name = e.target.value;
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  const handleSalaryChange = e => {
    const salary = parseInt(e.target.value) || '';
    if (!isNaN(salary) && salary >= 0 && salary <= 2000000) {
      member.salary = salary;
      setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
    }
  };

  const handleSalaryChangeSlider = value => {
    member.salary = value[0];
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  const handleSalaryChangeButton = percent => {
    member.salary = parseInt(member.salary * percent);
    if (member.salary > 2000000) member.salary = 2000000;
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  return (
    <div className='bg-pink-400 p-5'>
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
    </div>
  );
};

export default SalaryCalculator;
