import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";
import Chevron from "./stories/Components/Chevron/Chevron";
import { countryList, progressSteps } from "./Dictionary";

const App = () => {
  const [company, setCompany] = useState({
    companyName: "",
    eSpace: "",
    subscription: {},
    owner: {
      name: "",
      email: "",
      phone: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      country: {},
      postalCode: "",
    },
  });

  const handleChange = (field, group) => {
    if (group !== undefined) {
      setCompany({ ...company, [group]: { ...company[group], ...field } });
    } else {
      setCompany({ ...company, ...field });
    }
  };

  const logCompany = () => {
    console.log({ company });
  };

  return (
    <div className="bg-black h-full w-full flex  overflow-auto">
      <div className="w-full">
        <NavBar />
        <div className="flex mt-4 mb-4 pl-12">
          <Chevron className="w-4 transform rotate-180 h-5" />
          <p className="ml-4">Back</p>
        </div>
        <p className="pl-12 mt-8">ADD NEW CLIENT</p>
        <div className="pl-12">
          <ProgressTracker steps={progressSteps} />
        </div>
        <div className="w-2/3 pl-12">
          <CollapsibleSection
            className="border-b-2"
            title="Overview"
            defaultOpen
          >
            <div className="flex flex-wrap justify-between">
              <Input
                value={company.companyName}
                className="w-5/12 mb-4"
                label="Company Name"
                placeholder="placeholder"
                onChange={(input) => handleChange({ companyName: input })}
              />
              <Input
                value={company.eSpace}
                className="w-5/12  mb-4"
                label="eSpace Name"
                placeholder="placeholder"
                isRequired
                onChange={(input) => handleChange({ eSpace: input })}
              />
              <Dropdown
                className="w-5/12 mb-6"
                label="Subscription"
                value={company.subscription}
                options={Array(5)
                  .fill()
                  .map((a, index) => ({
                    label: `Option ${index + 1}`,
                    value: `Option ${index + 1}`,
                  }))}
                onChange={(selection) =>
                  handleChange({ subscription: selection })
                }
              />
            </div>
          </CollapsibleSection>
          <CollapsibleSection
            className="border-b-2"
            title="Owner Information"
            defaultOpen
          >
            <div className="flex flex-wrap justify-between">
              <Input
                value={company.owner.name}
                className="w-5/12 mb-4"
                label="Primary Owner"
                placeholder="placeholder"
                onChange={(input) => handleChange({ name: input }, "owner")}
              />
              <Input
                value={company.owner.email}
                className="w-5/12 mb-4"
                label="Primary Owner Email"
                placeholder="placeholder"
                onChange={(input) => handleChange({ email: input }, "owner")}
              />
              <Input
                value={company.owner.phone}
                className="w-5/12 mb-6"
                label="Primary Owner Phone"
                placeholder="placeholder"
                onChange={(input) => handleChange({ phone: input }, "owner")}
              />
            </div>
          </CollapsibleSection>
          <CollapsibleSection title="Location Information" defaultOpen>
            <div className="flex flex-wrap justify-between">
              <Input
                value={company.address.street}
                className="w-5/12 mb-4"
                label="Street Address"
                placeholder="placeholder"
                isRequired
                onChange={(input) => handleChange({ street: input }, "address")}
              />
              <Input
                value={company.address.city}
                className="w-5/12 mb-4"
                label="City"
                placeholder="placeholder"
                isRequired
                onChange={(input) => handleChange({ city: input }, "address")}
              />
              <Input
                value={company.address.suite}
                className="w-5/12 mb-4"
                label="Suite/Unit"
                placeholder="placeholder"
                onChange={(input) => handleChange({ suite: input }, "address")}
              />
              <Dropdown
                value={company.address.country}
                className="w-5/12 mb-4"
                label="Country"
                options={countryList.map((countryName) => ({
                  label: countryName,
                  value: countryName,
                }))}
                onChange={(selection) => handleChange({ country: selection })}
              />
              <Input
                value={company.address.postalCode}
                className="w-5/12"
                label="Postal Code"
                placeholder="placeholder"
                isRequired
                onChange={(input) =>
                  handleChange({ postalCode: input }, "address")
                }
              />
            </div>
          </CollapsibleSection>
          <Button
            className="pl-12 pr-12 mt-20"
            title="Save"
            onClick={logCompany}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
