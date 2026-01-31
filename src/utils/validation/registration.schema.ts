import { z } from 'zod';

/**
 * Egyptian mobile numbers
 * Examples:
 *  - 01234567890
 *  - +201234567890
 */
const PHONE_REGEX = /^(?:\+20|0)1[0125][0-9]{8}$/;

export const ACADEMIC_LEVELS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  'Graduate',
] as const;

export const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name is too long'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(120),

  phone: z
    .string()
    .trim()
    .regex(PHONE_REGEX, 'Please enter a valid Egyptian mobile number'),

  level: z.enum(ACADEMIC_LEVELS).optional(),

  interest: z
    .string()
    .trim()
    .min(10, 'Please provide a motivation of at least 10 characters')
    .max(800, 'Message is too long (maximum 800 characters)'),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
