import SalaryCalculator from '../SalaryCalculator/SalaryCalculator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const FamilyMemberTabs = () => {
  return (
    <div>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='account'>Feri</TabsTrigger>
          <TabsTrigger value='password'>Béla</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <SalaryCalculator />
        </TabsContent>
        <TabsContent value='password'>
          <SalaryCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FamilyMemberTabs;
