import { FormLabel, Input, FormHelperText, FormControl } from "@chakra-ui/react";

function ContactForm(){
    return (
    <FormControl>
        <FormLabel htmlFor='email'>Email address</FormLabel>
        <Input id='email' type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    )
}

export default ContactForm;