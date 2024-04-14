import { Input } from '@/components/ui/input';
import { Slider } from '../ui/slider';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  return (
    <div className='bg-pink-400 p-5'>
      <Input
        type='text'
        placeholder='Családtag neve'
        defaultValue={member.name}
        onChange={e =>
          setMembers([
            ...members.slice(0, index),
            { name: e.target.value },
            ...members.slice(index + 1),
          ])
        }
      />
      <Input type='number' placeholder='Bruttó bér' />
      <Slider
        defaultValue={[250000]}
        max={2000000}
        step={1000}
        onValueChange={value => console.log(value)}
      />
    </div>
  );
};

export default SalaryCalculator;
