import { Input } from '@/components/ui/input';
import { Slider } from '../ui/slider';
import { Label } from '@radix-ui/react-label';

const SalaryCalculator = ({ member, members, setMembers, index }) => {
  const handleNameChange = e => {
    member.name = e.target.value;
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
  };

  const handleEarningChange = e => {
    const earning = parseInt(e.target.value);
    if (!isNaN(earning) && earning >= 10000 && earning <= 2000000) {
      member.earning = earning;
      setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
    }
  };

  const handleEarningChangeSlider = value => {
    member.earning = value[0];
    setMembers([...members.slice(0, index), member, ...members.slice(index + 1)]);
    document.getElementById('earning').value = value[0];
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
      <Label htmlFor='earning'>Fizetése</Label>
      <Input
        type='text'
        placeholder='250000'
        defaultValue={member.earning}
        onChange={handleEarningChange}
        id='earning'
      />
      <Slider
        defaultValue={[member.earning]}
        max={2000000}
        min={10000}
        step={1000}
        onValueChange={handleEarningChangeSlider}
      />
    </div>
  );
};

export default SalaryCalculator;
