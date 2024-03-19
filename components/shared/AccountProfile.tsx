"use client";
import React from 'react' ; 
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod' ;
import { UserValidation } from '@/lib/validations/user';
import { Button } from "@/components/ui/button" ; 
import { z } from "zod" ; 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
interface Props { 
    user :  { 
        id : string , 
        objectId : string , 
        username : string , 
        name : string , 
        bio : string , 
        image : string
    } ,  
    btnTitle : string
}

export default function AccountProfile(
    { user, btnTitle }: Props
) { 
    const form = useForm({  
        resolver: zodResolver(UserValidation) ,
        defaultValues : { 
            username : "" , 
            name : "", 
            bio : "" , 
            profile_photo : ""
        }
      }) ;
      function onSubmit(values: z.infer<typeof UserValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }




  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 

      className="flex flex-col justify-start gap-10"
      name='profile_photo'
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
