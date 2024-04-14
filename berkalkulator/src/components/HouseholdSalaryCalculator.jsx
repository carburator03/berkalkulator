import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { createContext, useState } from 'react';

export const memberContext = createContext();

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState(['Feri', 'Laci']);
  return (
    <>
      <memberContext.Provider value={members}>
        <div className='flex gap-5 justify-center'>
          <FamilyMemberTabs />
          <div onClick={() => setMembers([...members, ''])}>
            <Button size='icon'>
              <Plus className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <HouseholdSummary />
      </memberContext.Provider>
    </>
  );
};

export default HouseholdSalaryCalculator;
