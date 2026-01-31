'use client';

import { memo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, RegistrationFormData, ACADEMIC_LEVELS } from '@/utils/validation/registration.schema';
import { SubmitIcon } from '@/assets/icons';

interface RegistrationFormProps {
  onSuccess?: () => void;
}

/**
 * RegistrationForm
 *
 * Main registration form for event / program / workshop sign-up.
 * Validates input using Zod schema and submits to Google Apps Script endpoint.
 *
 * Key Features & Optimizations:
 * - Real-time validation with clear error messages
 * - Loading + success + error states
 * - Responsive 1–2 column layout
 * - Memoized component
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      level: undefined,
      interest: '',
    },
    mode: 'onChange',
  });

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbz8U6Npwh4-nOdL7INYl-twigcpLOewIWIEQbFDLmPP0agy3gy8iVSZdXz61pT4cVcw/exec';

  const onSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    setSubmitError(null);

    const payload = {
      ...data,
      timestamp: new Date().toISOString(),
      level: data.level ?? 'Not specified',
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      reset();
      onSuccess?.();
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError('Something went wrong. Please try again later.');
    }
  };

  return (
    // Main registration section
    <section aria-labelledby="registration-heading">
      {/* Section heading */}
      <h3
        id="registration-heading"
        className="mb-10 font-bold text-xl md:text-2xl lg:text-3xl font-cairo"
      >
        Secure Your Spot Now
      </h3>

      {/* Error message */}
      {submitError && (
        <div
          className="
            mb-8 p-6 rounded-xl text-center font-medium
            bg-primary-50 text-primary-500 border border-primary-200
          "
        >
          {submitError}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="text-primary-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            {...register('fullName')}
            placeholder="John Doe"
            className={`
              form-control focus-outline-primary
              ${errors.fullName ? 'border-primary-400' : ''}
            `}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-primary-500 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-primary-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            {...register('email')}
            placeholder="you@example.com"
            className={`
              form-control focus-outline-primary
              ${errors.email ? 'border-primary-400' : ''}
            `}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-primary-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-primary-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            {...register('phone')}
            placeholder="+20 123 456 7890"
            className={`
              form-control focus-outline-primary
              ${errors.phone ? 'border-primary-400' : ''}
            `}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-primary-500 mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Academic Level */}
        <div className="space-y-1.5">
          <label htmlFor="level" className="form-label">
            Academic Level
          </label>
          <select
            id="level"
            {...register('level')}
            className={`
              form-control focus-outline-primary
              ${errors.level ? 'border-primary-400' : ''}
            `}
          >
            <option value="">Select level...</option>
            {ACADEMIC_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.level && (
            <p id="level-error" className="text-sm text-primary-500 mt-1">
              {errors.level.message}
            </p>
          )}
        </div>

        {/* Motivation / Interest – full width */}
        <div className="md:col-span-2 space-y-1.5">
          <label htmlFor="interest" className="form-label">
            Why do you want to attend?
          </label>
          <textarea
            id="interest"
            {...register('interest')}
            rows={5}
            placeholder="Tell us about your motivation and expectations..."
            className={`
              resize-none form-control focus-outline-primary
              ${errors.interest ? 'border-primary-400' : ''}
            `}
          />
          {errors.interest && (
            <p id="interest-error" className="text-sm text-primary-500 mt-1">
              {errors.interest.message}
            </p>
          )}
        </div>

        {/* Submit button – full width on all screens */}
        <div className="md:col-span-2 mt-6 text-center">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="
              flex items-center justify-center gap-2 md:gap-4
              py-5 w-full text-sm md:text-base font-semibold
              rounded-2xl cursor-pointer
              bg-primary-500 text-neutral-50
              hover:bg-primary-400 disabled:opacity-70 disabled:cursor-not-allowed
              focus-ring transition-all duration-300
            "
          >
            <SubmitIcon className="h-6 w-6" aria-hidden="true" />
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default memo(RegistrationForm);