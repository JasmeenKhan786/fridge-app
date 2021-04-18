import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button'

const reviewSchema =yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  
  shelf:yup.string().required().min(3),
  date:yup.string().required().min(10),
  deadline:yup.string().required().test('is-num','Deadline must be a number',(val)=>{
    return parseInt(val)>=0;
  }),
  rating:yup.string().required().test('is-num-1-5','Rating must be a number 1-5',(val)=>{
    return parseInt(val)<6 && parseInt(val)>0;
  }),
})


export default function ReviewForm({addReview}) {

    return (
      
      <View style={[globalStyles.container,{backgroundColor:'#2a2b30'}]}>
        <Formik
         validationSchema={reviewSchema}
          initialValues={{ title: '', body: '', shelf:'',date:'',deadline:'',rating: '' }}
          onSubmit={(values, actions) => {
            actions.resetForm()
            addReview(values);
           
          }}
        >
          {props => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                onBlur={props.handleBlur('title')}
              />
              <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

  
              <TextInput
                style={globalStyles.input}
                multiline
                placeholder='Details'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                onBlur={props.handleBlur('body')}
              />
              <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>


            <TextInput
                style={globalStyles.input}
                placeholder='Which Shelf is it on?'
                onChangeText={props.handleChange('shelf')}
                value={props.values.shelf}
                onBlur={props.handleBlur('shelf')}
              />
              <Text style={globalStyles.errorText}>{props.touched.shelf && props.errors.shelf}</Text>


              <TextInput
                style={globalStyles.input}
                placeholder='Date(dd-mm-yyyy)'
                onChangeText={props.handleChange('date')}
                value={props.values.date}
                onBlur={props.handleBlur('date')}
              />
              <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>


              <TextInput
                style={globalStyles.input}
                placeholder='Use it within how many days?'
                onChangeText={props.handleChange('deadline')}
                value={props.values.deadline}
                keyboardType='numeric'
                onBlur={props.handleBlur('deadline')}
              />
              <Text style={globalStyles.errorText}>{props.touched.deadline && props.errors.deadline}</Text>

  
              <TextInput 
                style={globalStyles.input}
                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
                onBlur={props.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

              
              <FlatButton onPress={props.handleSubmit} text='submit' />
            </View>
          )}
        </Formik>
      </View>
      
    );
  }