import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import React, { Component } from "react";
import Header from "../components/Header";


 class FormContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          age: "",
          gender: "",
          skills: [],
          about: ""
        },
  
        genderOptions: ["Male", "Female", "Others"],
        skillOptions: ["Programming", "Development", "Design", "Testing"]
      };
      this.handleTextArea = this.handleTextArea.bind(this);
      this.handleAge = this.handleAge.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleCheckBox = this.handleCheckBox.bind(this);
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
  
    handleAge(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            age: value
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
  
    handleTextArea(e) {
      console.log("Inside handleTextArea");
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            about: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleCheckBox(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.newUser.skills.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.newUser.skills.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.newUser.skills, newSelection];
      }
  
      this.setState(prevState => ({
        newUser: { ...prevState.newUser, skills: newSelectionArray }
      }));
    }
  
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;
  
      fetch("http://example.com", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          console.log("Successful" + data);
        });
      });
    }
  
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        newUser: {
          name: "",
          age: "",
          gender: "",
          skills: [],
          about: ""
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
            value={this.state.newUser.age}
            placeholder={"Enter your monthly rent"}
            handleChange={this.handleAge}
          />{" "}
          {/* Skill */}
          <TextArea
            title={"Address"}
            rows={10}
            value={this.state.newUser.about}
            name={"address"}
            handleChange={this.handleTextArea}
            placeholder={"Enter address of rented property"}
          />
          {/* About you */}
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
  