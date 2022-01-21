import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import React, { Component } from "react";
import Header from "../components/Header";
import GenerateDocument from "../components/GenerateDocument";
import  { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';


class FormContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          rent: "",
          address: "",
          owner:"",
          pan:"",
          startDate:"",
          endDate:""
        }
      };
      this.handleAddress = this.handleAddress.bind(this);
      this.handleRent = this.handleRent.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
  
    /* This lifecycle hook gets executed when the component mounts */
  
    handleFullName(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            name: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleRent(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            rent: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleAddress(e) {
      console.log("Inside handleTextArea");
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            address: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
  
    async handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;
      console.log(userData);
      const doc = <GenerateDocument {...userData}/>;
      const asPdf = pdf([]); // {} is important, throws without an argument
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();
      saveAs(blob, (userData.name.replace(" ","_").toLowerCase() + '.pdf'));
      
      // fetch("http://example.com", {
      //   method: "POST",
      //   body: JSON.stringify(userData),
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   }
      // }).then(response => {
      //   response.json().then(data => {
      //     console.log("Successful" + data);
      //   });
      // });
    }
  
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          name: "",
          address: "",
          rent: "",
          owner:"",
          pan:"",
          startDate:"",
          endDate:""
        }
      });
    }
  
    render() {
      return (
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Header/>
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />{" "}
          {/* Name of the user */}
          <Input
            inputType={"number"}
            name={"rent"}
            title={"Monthly Rent"}
            value={this.state.newUser.rent}
            placeholder={"Enter your monthly rent"}
            handleChange={this.handleRent}
          />{" "}
          {/* Rent */}
          <Input
            inputType={"text"}
            name={"owner"}
            title={"Owner Name"}
            value={this.state.newUser.owner}
            placeholder={"Enter your house owner name"}
            handleChange={this.handleInput}
          />{" "}
          {/* Owner */}
          <Input
            inputType={"text"}
            name={"pan"}
            title={"Owner PAN number"}
            value={this.state.newUser.pan}
            placeholder={"Enter your house owner's PAN number"}
            handleChange={this.handleInput}
          />{" "}
          {/* Owner PAN */}
          <TextArea
            title={"Address"}
            rows={2}
            value={this.state.newUser.address}
            name={"address"}
            handleChange={this.handleAddress}
            placeholder={"Enter address of rented property"}
          />
          {/* Address */}
          <Input
            inputType={"date"}
            name={"startDate"}
            title={"Start Date"}
            value={this.state.newUser.startDate}
            placeholder={"Enter Start Date"}
            handleChange={this.handleInput}
          />{" "}
          {/* Start Date */}
          <Input
            inputType={"date"}
            name={"endDate"}
            title={"End Date"}
            value={this.state.newUser.endDate}
            placeholder={"Enter End Date"}
            handleChange={this.handleInput}
          />{" "}
          {/* End Date */}
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}
        </form>
      );
    }
  }
  
  const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };
  
  export default FormContainer;
  