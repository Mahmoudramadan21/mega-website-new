'use client';

import { memo, useState } from 'react';

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  applicationSchema,
  ApplicationFormData,
} from "@/utils/validation/application.schema";

// ────────────────────────────────────────────────
// Imported sub-components
// ────────────────────────────────────────────────
import BasicInfoFields from "./BasicInfoFields";
import MotivationalQuestions from "./MotivationalQuestions";
import SkillRatingsFields from "./SkillRatingsFields";
import TechnicalCircleQuestions from "./TechnicalCircleQuestions";
import NonTechnicalCircleQuestions from "./NonTechnicalCircleQuestions";

import { SubmitIcon } from "@/assets/icons";

/**
 * ApplicationForm
 *
 * Main multi-section application form for MEGA program/team.
 * Uses Zod validation + react-hook-form, submits to Google Apps Script.
 *
 * Key Features & Optimizations:
 * - Modular structure: separated field groups as reusable components
 * - Conditional rendering based on selected track
 * - Real-time validation & clear error messages
 * - Loading, success, and error states
 * - Responsive 1–2 column grid layout
 * - Memoized component for performance
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
interface ApplicationFormProps {
  onSuccess?: () => void;
}

function ApplicationForm({ onSuccess }: ApplicationFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    shouldUnregister: true,
    shouldFocusError: true,
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  // Watch only fields needed for conditional rendering
  const selectedTrack = watch("track");
  const selectedTechCircle = watch("technicalCircle");
  const selectedNonTechCircle = watch("nonTechnicalCircle");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxFVOEK_FoLTEwKxo28_QZ4tODNhO7YivkcSeS5zFy_iALJ-cS5_OIhfbPgzjiKZPzJ/exec";

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setSubmitError(null);
    setSubmitSuccess(false);

    const payload = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      reset();
      setSubmitSuccess(true);
      onSuccess?.();
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitError("Failed to submit application. Please try again later.");
    }
  };

  return (
    // Main application form section
    <section aria-labelledby="application-heading" className="py-8">
      {/* Form heading */}
      <h3
        id="application-heading"
        className="
          mb-10
          font-cairo font-bold
          text-xl md:text-2xl lg:text-3xl
          text-center md:text-left
        "
      >
        Apply to MEGA Now
      </h3>


      {/* Error message */}
      {submitError && (
        <div
          className="
            mb-10 p-6 rounded-2xl text-center font-medium
            bg-primary-50 border border-primary-200
            text-primary-500
          "
        >
          {submitError}
        </div>
      )}


      {/* Main form grid */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-6
          max-w-5xl mx-auto
        "
      >
        {/* 1. Basic personal & contact information */}
        <BasicInfoFields register={register} errors={errors} />

        {/* 2. Long-answer motivational & behavioral questions */}
        <MotivationalQuestions register={register} errors={errors} />

        {/* 3. General soft-skills self-rating (1–5) */}
        <SkillRatingsFields register={register} errors={errors} />

        {/* 4. Track selection – controls conditional rendering */}
        <div className="md:col-span-2 space-y-1.5">
          <label htmlFor="track" className="form-label">
            Which track are you applying for? / أي مسار تتقدم له؟{" "}
            <span className="text-primary-500">*</span>
          </label>
          <select
            id="track"
            {...register("track")}
            className={`
              form-control focus-outline-primary
              ${errors.track ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select track / اختر المسار</option>
            <option value="Technical Only">Technical Only</option>
            <option value="Non-Technical Only">Non-Technical Only</option>
            <option value="Both">Both Non Technical & Technical</option>
          </select>
          {errors.track && (
            <p className="text-sm text-primary-500 mt-1">
              {errors.track.message}
            </p>
          )}
        </div>

        {/* 5. Technical circle & questions (conditional) */}
        {(selectedTrack === "Technical Only" || selectedTrack === "Both") && (
          <TechnicalCircleQuestions
            register={register}
            errors={errors}
            watch={watch}
          />
        )}

        {/* 6. Non-Technical circle & questions (conditional) */}
        {(selectedTrack === "Non-Technical Only" ||
          selectedTrack === "Both") && (
          <NonTechnicalCircleQuestions
            register={register}
            errors={errors}
            watch={watch}
          />
        )}

        {/* Submit button */}
        <div className="md:col-span-2 mt-10 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
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
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default memo(ApplicationForm);