import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./_app";
const Index: NextPageWithLayout = () => {
  return (
    <main>
      <h1>hwllo</h1>
    </main>
  );
};

Index.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default Index;
