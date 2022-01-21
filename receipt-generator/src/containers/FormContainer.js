import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import React, { Component } from "react";
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
        },
        errors:{}
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
      if (this.validateForm()){
          let userData = this.state.newUser;
          console.log(userData);
          const doc = <GenerateDocument {...userData}/>;
          const asPdf = pdf([]); // {} is important, throws without an argument
          asPdf.updateContainer(doc);
          const blob = await asPdf.toBlob();
          saveAs(blob, (userData.name.replace(" ","_").toLowerCase() + '.pdf'));
      }
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
        },
        errors:{}
      });
    }

    validateForm(){
      let userData = this.state.newUser;
      let formIsValid = true;
      let errors = {};

      if (!userData["name"]){
        formIsValid = false;
        errors["name"] = "Please enter your name";
      }

      if (!userData["owner"]){
        formIsValid = false;
        errors["owner"] = "Please enter owner's name";
      }
      
      if (!userData["rent"]){
        formIsValid = false;
        errors["rent"] = "Please enter monthly rent";
      }

      if (!userData["startDate"]){
        formIsValid = false;
        errors["startDate"] = "Rent Start Date is required";
      }

      if (!userData["endDate"]){
        formIsValid = false;
        errors["endDate"] = "Rent End Date is required";
      }
      if (!userData["address"]){
        formIsValid = false;
        errors["address"] = "Property address is required";
      }
      this.setState({
        errors: errors
      });
      return formIsValid;
    }
    
    render() {

      return (
        <form className="container-fluid"  onSubmit={this.handleFormSubmit}>
          <Input
            inputtype={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handle={this.handleInput}
          />{" "}
          <span className="error text-danger">{this.state.errors.name}</span>
          {/* Name of the user */}
          <Input
            inputtype={"number"}
            name={"rent"}
            title={"Monthly Rent"}
            value={this.state.newUser.rent}
            placeholder={"Enter your monthly rent"}
            handle={this.handleRent}
          />{" "}
          <span className="error text-danger">{this.state.errors.rent}</span>
          {/* Rent */}
          <Input
            inputtype={"text"}
            name={"owner"}
            title={"Owner Name"}
            value={this.state.newUser.owner}
            placeholder={"Enter your house owner name"}
            handle={this.handleInput}
          />{" "}
          <span className="error text-danger">{this.state.errors.owner}</span>
          {/* Owner */}
          <Input
            inputtype={"text"}
            name={"pan"}
            title={"Owner PAN number"}
            value={this.state.newUser.pan}
            placeholder={"Enter your house owner's PAN number"}
            handle={this.handleInput}
          />{" "}
          {/* Owner PAN */}
          <TextArea
            title={"Address"}
            rows={2}
            value={this.state.newUser.address}
            name={"address"}
            handle={this.handleAddress}
            placeholder={"Enter address of rented property"}
          />
          <span className="error text-danger">{this.state.errors.address}</span>
          {/* Address */}
          <Input
            inputtype={"date"}
            name={"startDate"}
            title={"Start Date"}
            value={this.state.newUser.startDate}
            placeholder={"Enter Start Date"}
            handle={this.handleInput}
          />{" "}
          <span className="error text-danger">{this.state.errors.startDate}</span> 
          {/* Start Date */}
          <Input
            inputtype={"date"}
            name={"endDate"}
            title={"End Date"}
            value={this.state.newUser.endDate}
            placeholder={"Enter End Date"}
            handle={this.handleInput}
          />{" "}
          <span className="error text-danger">{this.state.errors.endDate}</span><br/>
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
  