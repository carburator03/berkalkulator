import { Input } from '@/components/ui/input';
import { Slider } from '../ui/slider';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  const handleNameChange = e => {
    member.name = e.target.value;
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  const handleEarningChange = e => {
    member.earning = e.target.value;
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  return (
    <div className='bg-pink-400 p-5'>
      <Input
        type='text'
        placeholder='Feri'
        defaultValue={member.name}
        onChange={handleNameChange}
      />
      <Input
        type='text'
        placeholder='250000'
        defaultValue={member.earning}
        onChange={handleEarningChange}
      />
      <Slider
        defaultValue={[250000]}
        max={2000000}
        min={10000}
        step={1000}
        onValueChange={value => console.log(value)}
      />
    </div>
  );
};

export default SalaryCalculator;
