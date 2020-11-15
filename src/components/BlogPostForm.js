import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return ( 
        <View style={styles.container}>
        <Text style={styles.label}>Titulo del Post:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.label}>Contenido:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <Button 
        onPress={()=> onSubmit(title, content)}
        title="Añadir Blog" 
        />
        </View>
        );	
}	

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: "lightblue",
        borderColor: 'black',
        borderWidth: 5,
        maxHeight: 450,
        maxWidth: 450,
        alignContent: "center",
    },
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        padding: 5, 
        margin: 5,
        backgroundColor: 'white',
    },  
    label:{
        fontSize: 20, 
        marginBottom: 5, 
        marginLeft: 5,
    },
});

export default BlogPostForm;
