import SalaryCalculator from '../SalaryCalculator/SalaryCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useContext } from 'react';
import { memberContext } from '../HouseholdSalaryCalculator';

const FamilyMemberTabs = () => {
  const members = useContext(memberContext);
  return (
    <div>
      <Tabs defaultValue={members[0]} className=''>
        <TabsList>
          {members.map(member => (
            <TabsTrigger value={member}>{member}</TabsTrigger>
          ))}
        </TabsList>
        {members.map(member => (
          <TabsContent value={member}>
            <SalaryCalculator />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FamilyMemberTabs;
