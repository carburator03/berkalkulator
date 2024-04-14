import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <FamilyMemberTabs />
      <Button size='icon'>
        <Plus className='h-4 w-4' />
      </Button>
      <HouseholdSummary />
    </>
  );
};

export default HouseholdSalaryCalculator;
