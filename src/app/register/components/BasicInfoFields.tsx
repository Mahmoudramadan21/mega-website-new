"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";
import { memo } from "react";

interface BasicInfoFieldsProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

/**
 * BasicInfoFields
 *
 * Core personal & contact information section of the application form.
 * Includes name, email, phone, social links, education details, and location.
 *
 * Key Features & Optimizations:
 * - Bilingual labels (English / Arabic)
 * - Real-time validation with error messages below each field
 * - Consistent styling via form-control + focus-outline-primary
 * - Responsive spacing and layout
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
function BasicInfoFields({ register, errors }: BasicInfoFieldsProps) {
  return (
    <>
      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="fullName" className="form-label">
          Full Name / الاسم بالكامل <span className="text-primary-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")}
          placeholder="Enter your full name"
          className={`
            form-control focus-outline-primary
            ${errors.fullName ? "border-primary-400" : ""}
          `}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-primary-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="form-label">
          Email / البريد الإلكتروني <span className="text-primary-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="your@email.com"
          className={`
            form-control focus-outline-primary
            ${errors.email ? "border-primary-400" : ""}
          `}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-primary-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number / رقم الهاتف <span className="text-primary-500">*</span>
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register("phoneNumber")}
          placeholder="+20 123 456 7890"
          className={`
            form-control focus-outline-primary
            ${errors.phoneNumber ? "border-primary-400" : ""}
          `}
        />
        {errors.phoneNumber && (
          <p id="phoneNumber-error" className="mt-1 text-sm text-primary-500">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      {/* Facebook Link */}
      <div className="space-y-1.5">
        <label htmlFor="facebookLink" className="form-label">
          Facebook Link / رابط فيسبوك
        </label>
        <input
          id="facebookLink"
          type="url"
          {...register("facebookLink")}
          placeholder="https://facebook.com/yourprofile"
          className={`
            form-control focus-outline-primary
            ${errors.facebookLink ? "border-primary-400" : ""}
          `}
        />
        {errors.facebookLink && (
          <p id="facebookLink-error" className="mt-1 text-sm text-primary-500">
            {errors.facebookLink.message}
          </p>
        )}
      </div>

      {/* Discord Username */}
      <div className="space-y-1.5">
        <label htmlFor="discordUsername" className="form-label">
          Discord Username / اسم المستخدم على ديسكورد
        </label>
        <input
          id="discordUsername"
          type="text"
          {...register("discordUsername")}
          placeholder="your#discordusername"
          className={`
            form-control focus-outline-primary
            ${errors.discordUsername ? "border-primary-400" : ""}
          `}
        />
        {errors.discordUsername && (
          <p
            id="discordUsername-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.discordUsername.message}
          </p>
        )}
      </div>

      {/* LinkedIn Link */}
      <div className="space-y-1.5">
        <label htmlFor="linkedInLink" className="form-label">
          LinkedIn Link / رابط لينكدإن
        </label>
        <input
          id="linkedInLink"
          type="url"
          {...register("linkedInLink")}
          placeholder="https://linkedin.com/in/yourprofile"
          className={`
            form-control focus-outline-primary
            ${errors.linkedInLink ? "border-primary-400" : ""}
          `}
        />
        {errors.linkedInLink && (
          <p id="linkedInLink-error" className="mt-1 text-sm text-primary-500">
            {errors.linkedInLink.message}
          </p>
        )}
      </div>

      {/* GitHub Link */}
      <div className="space-y-1.5">
        <label htmlFor="gitHubLink" className="form-label">
          GitHub Link / رابط جيت هب
        </label>
        <input
          id="gitHubLink"
          type="url"
          {...register("gitHubLink")}
          placeholder="https://github.com/yourusername"
          className={`
            form-control focus-outline-primary
            ${errors.gitHubLink ? "border-primary-400" : ""}
          `}
        />
        {errors.gitHubLink && (
          <p id="gitHubLink-error" className="mt-1 text-sm text-primary-500">
            {errors.gitHubLink.message}
          </p>
        )}
      </div>

      {/* University */}
      <div className="space-y-1.5">
        <label htmlFor="university" className="form-label">
          What’s your university? / ما هي جامعتك؟
        </label>
        <input
          id="university"
          type="text"
          {...register("university")}
          placeholder="Enter your university"
          className={`
            form-control focus-outline-primary
            ${errors.university ? "border-primary-400" : ""}
          `}
        />
        {errors.university && (
          <p id="university-error" className="mt-1 text-sm text-primary-500">
            {errors.university.message}
          </p>
        )}
      </div>

      {/* College */}
      <div className="space-y-1.5">
        <label htmlFor="college" className="form-label">
          What’s your college? / ما هي كليتك؟
        </label>
        <input
          id="college"
          type="text"
          {...register("college")}
          placeholder="Enter your college"
          className={`
            form-control focus-outline-primary
            ${errors.college ? "border-primary-400" : ""}
          `}
        />
        {errors.college && (
          <p id="college-error" className="mt-1 text-sm text-primary-500">
            {errors.college.message}
          </p>
        )}
      </div>

      {/* Academic Year */}
      <div className="space-y-1.5">
        <label htmlFor="academicYear" className="form-label">
          Academic Year / السنة الدراسية
        </label>
        <select
          id="academicYear"
          {...register("academicYear")}
          className={`
            form-control focus-outline-primary
            ${errors.academicYear ? "border-primary-400" : ""}
          `}
        >
          <option value="">Select year</option>
          <option value="LVL 000 (for Engineering Students)">
            LVL 000 (for Engineering Students)
          </option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="Fourth Year">Fourth Year</option>
        </select>
        {errors.academicYear && (
          <p id="academicYear-error" className="mt-1 text-sm text-primary-500">
            {errors.academicYear.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-1.5">
        <label htmlFor="location" className="form-label">
          Where do you live? / أين تقيم؟
        </label>
        <input
          id="location"
          type="text"
          {...register("location")}
          placeholder="Enter your location"
          className={`
            form-control focus-outline-primary
            ${errors.location ? "border-primary-400" : ""}
          `}
        />
        {errors.location && (
          <p id="location-error" className="mt-1 text-sm text-primary-500">
            {errors.location.message}
          </p>
        )}
      </div>
    </>
  );
}

export default BasicInfoFields;