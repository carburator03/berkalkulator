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
      dependent: 1,
      dependent2: 0,
      net: 0,
    },
    {
      name: 'Jani',
      salary: '',
      young: false,
      married: true,
      personnel: false,
      family: true,
      dependent: 2,
      dependent2: 1,
      net: 0,
    },
  ]);
  return (
    <>
      <div className='flex justify-center w-5/6 m-auto gap-10'>
        <div className='flex gap-5 justify-center flex-1 border-4'>
          <FamilyMemberTabs members={members} setMembers={setMembers} />
          <Button
            size='icon'
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
                  dependent: 1,
                  dependent2: 0,
                  net: 0,
                },
              ])
            }
            className='-ml-20'
          >
            <Plus />
          </Button>
        </div>
        <HouseholdSummary members={members} />
      </div>
    </>
  );
};

export default HouseholdSalaryCalculator;
