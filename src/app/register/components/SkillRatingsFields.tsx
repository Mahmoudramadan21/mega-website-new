"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";
import { memo } from "react";

interface SkillRatingsFieldsProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

/**
 * SkillRatingsFields
 *
 * Self-assessment section for general soft skills and personality traits.
 * Uses 1–5 scale dropdowns with bilingual labels.
 *
 * Key Features & Optimizations:
 * - Responsive grid (1–3 columns depending on screen size)
 * - Consistent styling via form-control + focus-outline-primary
 * - Real-time validation with error messages below each field
 * - Bilingual labels for better inclusivity
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
function SkillRatingsFields({ register, errors }: SkillRatingsFieldsProps) {
  return (
    // Main container – full width on all screens
    <div className="md:col-span-2">
      {/* Section title */}
      <h4
        className="
          mb-5
          font-bold text-lg md:text-xl
        "
      >
        Rate your Skills on a scale of 1–5 / قيّم مهاراتك من 1 إلى 5
      </h4>

      {/* Skills grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-5 md:gap-6
        "
      >
        {/* Commitment & Organization */}
        <div className="space-y-1.5">
          <label htmlFor="commitmentOrganization" className="form-label">
            Commitment & Organization
          </label>
          <select
            id="commitmentOrganization"
            {...register("commitmentOrganization")}
            className={`
              form-control focus-outline-primary
              ${errors.commitmentOrganization ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.commitmentOrganization && (
            <p
              id="commitmentOrganization-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.commitmentOrganization.message}
            </p>
          )}
        </div>

        {/* Acceptance of Feedback */}
        <div className="space-y-1.5">
          <label htmlFor="acceptanceFeedback" className="form-label">
            Acceptance of Feedback
          </label>
          <select
            id="acceptanceFeedback"
            {...register("acceptanceFeedback")}
            className={`
              form-control focus-outline-primary
              ${errors.acceptanceFeedback ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.acceptanceFeedback && (
            <p
              id="acceptanceFeedback-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.acceptanceFeedback.message}
            </p>
          )}
        </div>

        {/* Nervousness / Short-temper */}
        <div className="space-y-1.5">
          <label htmlFor="nervousnessShortTemper" className="form-label">
            Nervousness / Short-temper
          </label>
          <select
            id="nervousnessShortTemper"
            {...register("nervousnessShortTemper")}
            className={`
              form-control focus-outline-primary
              ${errors.nervousnessShortTemper ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.nervousnessShortTemper && (
            <p
              id="nervousnessShortTemper-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.nervousnessShortTemper.message}
            </p>
          )}
        </div>

        {/* Follow up & continuity */}
        <div className="space-y-1.5">
          <label htmlFor="followUpContinuity" className="form-label">
            Follow up & continuity
          </label>
          <select
            id="followUpContinuity"
            {...register("followUpContinuity")}
            className={`
              form-control focus-outline-primary
              ${errors.followUpContinuity ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.followUpContinuity && (
            <p
              id="followUpContinuity-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.followUpContinuity.message}
            </p>
          )}
        </div>

        {/* Emotional stability */}
        <div className="space-y-1.5">
          <label htmlFor="emotionalStability" className="form-label">
            Emotional stability
          </label>
          <select
            id="emotionalStability"
            {...register("emotionalStability")}
            className={`
              form-control focus-outline-primary
              ${errors.emotionalStability ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.emotionalStability && (
            <p
              id="emotionalStability-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.emotionalStability.message}
            </p>
          )}
        </div>

        {/* Communication */}
        <div className="space-y-1.5">
          <label htmlFor="communication" className="form-label">
            Communication
          </label>
          <select
            id="communication"
            {...register("communication")}
            className={`
              form-control focus-outline-primary
              ${errors.communication ? "border-primary-400" : ""}
            `}
          >
            <option value="">Select</option>
            <option value="1">1 – Very low</option>
            <option value="2">2</option>
            <option value="3">3 – Average</option>
            <option value="4">4</option>
            <option value="5">5 – Excellent</option>
          </select>
          {errors.communication && (
            <p
              id="communication-error"
              className="mt-1 text-sm text-primary-500"
            >
              {errors.communication.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillRatingsFields;
