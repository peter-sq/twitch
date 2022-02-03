import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';



class StreamCreate extends React.Component {
    renderInput({input, label}){
        return (
         
        <div className='field'>
               <label> {label} </label>
            <input {...input} />
        </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
    };

    render(){
        return(
              <form 
               onSubmit={this.props.handleSubmit(this.onSubmit)}
               className='ui form'>
                  <Field name = "title" component = {this.renderInput} label = " Enter title"/>
                  <Field name = "description"  component = {this.renderInput} label = "Enter description"/>
                  <button className='ui button primary'>submit</button>
              </form>
        );
    }
}

const validate = (formValues) => {
const errors = {};
if (!formValues.title){
    errors.title = 'you must enter a title';
}
if(!formValues.description){
    errors.title = 'you must enter a description'
}

return errors;

};

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);


