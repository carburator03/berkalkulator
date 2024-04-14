import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([
    { name: 'Peti', earning: 300000 },
    { name: 'Jani', earning: null },
  ]);
  return (
    <>
      <div className='flex gap-5 justify-center'>
        <FamilyMemberTabs members={members} setMembers={setMembers} />
        <div onClick={() => setMembers([...members, ''])}>
          <Button size='icon'>
            <Plus className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <HouseholdSummary />
    </>
  );
};

export default HouseholdSalaryCalculator;
