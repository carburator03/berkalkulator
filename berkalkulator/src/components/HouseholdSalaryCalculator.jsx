import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([
    {
      name: 'Peti',
      salary: 100000,
      young: false,
      married: false,
      personnel: false,
      family: true,
      net: 0,
    },
    {
      name: 'Jani',
      salary: '',
      young: false,
      married: true,
      personnel: false,
      family: true,
      net: 0,
    },
  ]);
  return (
    <>
      <div className='flex gap-5 justify-center'>
        <FamilyMemberTabs members={members} setMembers={setMembers} />
        <div
          onClick={() =>
            setMembers([
              ...members,
              {
                name: 'Családtag',
                salary: '',
                young: false,
                married: false,
                personnel: false,
                family: false,
                net: 0,
              },
            ])
          }
        >
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
