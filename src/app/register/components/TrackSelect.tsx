'use client';

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";

interface TrackSelectProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

/**
 * TrackSelect Component
 *
 * Handles the "track" selection dropdown with validation and error display.
 */
const TrackSelect = ({ register, errors }: TrackSelectProps) => {
  return (
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
        <option value="">
          Select track / اختر المسار
        </option>
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
  );
};

export default TrackSelect;
