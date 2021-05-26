import React from "react";
import Page from "@/components/Page";
import HwContainer from "@/components/HwContainer";
import HwHeader from "@/components/HweHeader";
import HwHeaderElement from "@/components/HwHeaderElement";
import HwBanner from "@/components/HwBanner";
import HwButton from "@/components/HwButton";
import HwSearch from "@/components/HwSearch";
import HwListLanguage from "@/components/HwListLanguage";
import HwLanguage from "@/components/HwLanguage";
import HwActionTop from "@/components/HwActionTop";

const Home = () => {
  return (
    <Page>
      <div id="main-content">
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
          <HwListLanguage>
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
            <HwLanguage logo="c==" ext="py,py,c" name="c++" />
          </HwListLanguage>

          <HwActionTop />
        </HwContainer>
      </div>
    </Page>
  );
};

export default Home;
