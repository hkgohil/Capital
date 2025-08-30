import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authformSchema } from '@/lib/utils'
const customInputSchema = authformSchema("sign-up")
interface CustomInputProps{
    control: Control<z.infer<typeof customInputSchema>>
    name: "email" | "password" | "firstName" | "lastName" | "address1" | "state" | "postalCode" | "dateOfBirth" | "ssn" | "city"
    label: string
    type: string
    placeholder: string
}

const CustomInput = ({control, name, label, type, placeholder}: CustomInputProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <div className='form-item'>
            <FormLabel className='form-label'>{label}</FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input
                    placeholder={placeholder}
                    className='input-class'
                    type={type}
                    {...field}
                    />
                </FormControl>
                <FormMessage  className='form-message mt-2'/>
            </div>
        </div>
    )}
/>
  )
}

export default CustomInput