import React from "react";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./_app";

const about: NextPageWithLayout = () => {
  return <div>about</div>;
};
about.getLayout = function getLayout(page) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
export default about;
