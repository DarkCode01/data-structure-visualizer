import React from "react";
import Page from "@/components/Page";
import HwContainer from "@/components/HwContainer";
import HwHeader from "@/components/HweHeader";
import HwHeaderElement from "@/components/HwHeaderElement";
import HwBanner from "@/components/HwBanner";
import HwButton from "@/components/HwButton";
import HwSearch from "@/components/HwSearch";

const Home = () => {
  return (
    <Page>
      <div>
        <HwHeader>
          <HwHeaderElement>
            <HwBanner>
              <h4>Hello Worlds</h4>
            </HwBanner>
          </HwHeaderElement>
          <HwHeaderElement>
            <HwButton>Contribute</HwButton>
          </HwHeaderElement>
        </HwHeader>
        <HwContainer>
          <HwSearch />
        </HwContainer>
      </div>
    </Page>
  );
};

export default Home;
