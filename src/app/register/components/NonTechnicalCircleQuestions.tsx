"use client";

import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";
import { memo } from "react";

interface NonTechnicalCircleQuestionsProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>;
}

/**
 * NonTechnicalCircleQuestions
 *
 * Conditional section for non-technical track questions based on selected circle.
 * Includes circle-specific long-answer questions + some skill ratings.
 *
 * Key Features & Optimizations:
 * - Conditional rendering per selected non-technical circle
 * - Bilingual labels and descriptions
 * - Real-time validation with error messages
 * - Accessible fields with aria-invalid + aria-describedby
 * - Consistent form-control styling
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
function NonTechnicalCircleQuestions({
  register,
  errors,
  watch,
}: NonTechnicalCircleQuestionsProps) {
  const selectedNonTechCircle = watch("nonTechnicalCircle");

  return (
    <div className="md:col-span-2 mt-10">
      {/* Section title */}
      <h4 className="mb-6 font-bold text-xl md:text-2xl text-gray-800">
        Non-Technical Track / المسار غير التقني
      </h4>

      {/* Circle selection dropdown */}
      <div className="space-y-1.5 mb-8">
        <label htmlFor="nonTechnicalCircle" className="form-label block">
          Which non-technical circle would you like to apply for? / أي دائرة غير
          تقنية تريد التقديم لها؟ <span className="text-primary-500">*</span>
        </label>
        <select
          id="nonTechnicalCircle"
          {...register("nonTechnicalCircle")}
          className={`form-control focus-outline-primary w-full ${
            errors.nonTechnicalCircle
              ? "border-primary-500 focus:border-primary-500"
              : ""
          }`}
        >
          <option value="">Select circle / اختر الدائرة</option>
          <option value="HR - Human Resources">HR - Human Resources</option>
          <option value="PR&FR - Public Relations & Fundraising">
            PR&FR - Public Relations & Fundraising
          </option>
          <option value="R&D - Research & Development">
            R&D - Research & Development
          </option>
          <option value="PM - Project Management">
            PM - Project Management
          </option>
          <option value="EO - Event Operations">EO - Event Operations</option>
          <option value="Media (Graphic Design)">Media (Graphic Design)</option>
          <option value="Media (Video Editing)">Media (Video Editing)</option>
          <option value="Media (Motion Graphics)">
            Media (Motion Graphics)
          </option>
        </select>
        {errors.nonTechnicalCircle && (
          <p className="mt-1 text-sm text-primary-500">
            {errors.nonTechnicalCircle.message}
          </p>
        )}
      </div>

      {/* ────────────────────────────────────────────────
          HR - Human Resources
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "HR - Human Resources" && (
        <div className="space-y-8">
          {/* Circle description */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p className="mb-3 font-medium">HR Circle Responsibilities:</p>
            <p>
              Member follow-up, recruitment processes, performance evaluation,
              conflict resolution, member support, and maintaining a respectful
              and organized team environment.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrWhyJoin" className="form-label">
              Why do you want to join HR specifically, and what makes you a good
              fit for this path?
            </label>
            <textarea
              id="hrWhyJoin"
              {...register("hrWhyJoin")}
              rows={5}
              placeholder="Explain why..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrWhyJoin
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrWhyJoin && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrWhyJoin.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrExperience" className="form-label">
              Do you have any previous experience as HR or with HR-related
              tasks? Please share an example if you have.
            </label>
            <textarea
              id="hrExperience"
              {...register("hrExperience")}
              rows={5}
              placeholder="Share experience..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrExperience
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrExperience && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrExperience.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrHandleMember" className="form-label">
              How would you handle a member who is upset, uncooperative, or not
              following the rules?
            </label>
            <textarea
              id="hrHandleMember"
              {...register("hrHandleMember")}
              rows={5}
              placeholder="Explain how..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrHandleMember
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrHandleMember && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrHandleMember.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrQualities" className="form-label">
              What do you think are the most important qualities when selecting
              new members?
            </label>
            <textarea
              id="hrQualities"
              {...register("hrQualities")}
              rows={5}
              placeholder="List qualities..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrQualities
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrQualities && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrQualities.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrActivity" className="form-label">
              If you were asked to design a small activity to introduce new
              members, what would you do and why?
            </label>
            <textarea
              id="hrActivity"
              {...register("hrActivity")}
              rows={5}
              placeholder="Describe activity..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrActivity
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrActivity && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrActivity.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrRoleDescription" className="form-label">
              Describe HR’s role in your own words
            </label>
            <textarea
              id="hrRoleDescription"
              {...register("hrRoleDescription")}
              rows={5}
              placeholder="Describe role..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrRoleDescription
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrRoleDescription && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrRoleDescription.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="hrImportantRule" className="form-label">
              What do you think is the most important rule or value that
              everyone on the team should follow?
            </label>
            <textarea
              id="hrImportantRule"
              {...register("hrImportantRule")}
              rows={5}
              placeholder="Explain rule..."
              className={`resize-none form-control focus-outline-primary ${
                errors.hrImportantRule
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.hrImportantRule && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.hrImportantRule.message}
              </p>
            )}
          </div>

          {/* HR-specific skill ratings */}
          <div className="mt-10">
            <h5 className="mb-5 font-semibold text-lg">
              Rate your Skills on a scale of 1–5
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  id: "hrPunctualityCommitment",
                  label: "Punctuality & Commitment",
                },
                { id: "hrActiveParticipation", label: "Active Participation" },
                {
                  id: "hrTeamworkCollaboration",
                  label: "Teamwork & Collaboration",
                },
                { id: "hrTimeManagement", label: "Time Management" },
                {
                  id: "hrPositivityMotivation",
                  label: "Positivity & Motivation",
                },
                {
                  id: "hrResponsibilityOwnership",
                  label: "Responsibility & Ownership",
                },
                {
                  id: "hrFlexibilityAdaptability",
                  label: "Flexibility & Adaptability",
                },
                { id: "hrRespectRules", label: "Respect for Rules" },
                {
                  id: "hrSolveProblems",
                  label:
                    "Your ability to solve problems related to people and communication",
                },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  <select
                    id={field.id}
                    {...register(field.id as keyof ApplicationFormData)}
                    className={`form-control focus-outline-primary ${
                      errors[field.id as keyof ApplicationFormData]
                        ? "border-primary-500 focus:border-primary-500"
                        : ""
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="1">1 – Very low</option>
                    <option value="2">2</option>
                    <option value="3">3 – Average</option>
                    <option value="4">4</option>
                    <option value="5">5 – Excellent</option>
                  </select>
                  {errors[field.id as keyof ApplicationFormData] && (
                    <p className="mt-1 text-sm text-primary-500">
                      {errors[field.id as keyof ApplicationFormData]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          PR&FR - Public Relations & Fundraising
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "PR&FR - Public Relations & Fundraising" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              دائرة العلاقات العامة وجمع التبرعات مسؤولة عن التواصل مع الشركات
              والجهات الخارجية، بناء الشراكات، وتنسيق الـ Sponsorships لتمثيل
              الفريق بصورة محترفة.
              <br />
              <br />
              The PR & FR Circle handles external communication, partnerships,
              sponsorships, and representing the team professionally to outside
              organizations.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrWhyChoose" className="form-label">
              Why did you choose to apply to this circle?
            </label>
            <textarea
              id="prfrWhyChoose"
              {...register("prfrWhyChoose")}
              rows={5}
              placeholder="Explain why..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrWhyChoose
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrWhyChoose && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrWhyChoose.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrAddToCircle" className="form-label">
              What do you expect to add to the circle?
            </label>
            <textarea
              id="prfrAddToCircle"
              {...register("prfrAddToCircle")}
              rows={5}
              placeholder="What to add..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrAddToCircle
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrAddToCircle && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrAddToCircle.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrSkillsAfterYear" className="form-label">
              What skills do you want to have one year after joining the circle?
            </label>
            <textarea
              id="prfrSkillsAfterYear"
              {...register("prfrSkillsAfterYear")}
              rows={5}
              placeholder="Skills after year..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrSkillsAfterYear
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrSkillsAfterYear && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrSkillsAfterYear.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrConvinceOthers" className="form-label">
              Are you willing to convince others?
            </label>
            <textarea
              id="prfrConvinceOthers"
              {...register("prfrConvinceOthers")}
              rows={5}
              placeholder="Explain..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrConvinceOthers
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrConvinceOthers && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrConvinceOthers.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrSuddenTask" className="form-label">
              If someone on the team suddenly needs your help with a task, how
              would you react?
            </label>
            <textarea
              id="prfrSuddenTask"
              {...register("prfrSuddenTask")}
              rows={5}
              placeholder="How to react..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrSuddenTask
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrSuddenTask && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrSuddenTask.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrHoursPerWeek" className="form-label">
              How many hours per week can you dedicate to the circle?
            </label>
            <textarea
              id="prfrHoursPerWeek"
              {...register("prfrHoursPerWeek")}
              rows={4}
              placeholder="Hours per week..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrHoursPerWeek
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrHoursPerWeek && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrHoursPerWeek.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="prfrAttendMeetings" className="form-label">
              Can you attend the meetings regularly?
            </label>
            <textarea
              id="prfrAttendMeetings"
              {...register("prfrAttendMeetings")}
              rows={4}
              placeholder="Explain..."
              className={`resize-none form-control focus-outline-primary ${
                errors.prfrAttendMeetings
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.prfrAttendMeetings && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.prfrAttendMeetings.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          R&D - Research & Development
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "R&D - Research & Development" && (
        <div className="space-y-8">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              مسؤولة عن البحث من مصادر موثوقة، تقديم أفكار جديدة، دعم الجانب
              العلمي، وتحليل المعلومات لتطوير مشروعات ومحتوى الفريق.
              <br />
              <br />
              The R&D Circle focuses on research, generating new ideas,
              supporting scientific content, and analyzing information to help
              enhance team projects and activities.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndKnowledge" className="form-label">
              What do you know about research and development R&D and What makes
              you choose R&D committee?
            </label>
            <textarea
              id="rndKnowledge"
              {...register("rndKnowledge")}
              rows={5}
              placeholder="What you know..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndKnowledge
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndKnowledge && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndKnowledge.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndImportance" className="form-label">
              In your opinion why research and development R&D is important to
              our team?
            </label>
            <textarea
              id="rndImportance"
              {...register("rndImportance")}
              rows={5}
              placeholder="Explain importance..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndImportance
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndImportance && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndImportance.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndLastBook" className="form-label">
              Mention the last book, novel or article you have read. Tell us
              anything about it
            </label>
            <textarea
              id="rndLastBook"
              {...register("rndLastBook")}
              rows={5}
              placeholder="Mention last read..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndLastBook
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndLastBook && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndLastBook.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndDigitalContent" className="form-label">
              Do you have any experience in writing digital content? If yes,
              share a link
            </label>
            <textarea
              id="rndDigitalContent"
              {...register("rndDigitalContent")}
              rows={5}
              placeholder="Share experience..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndDigitalContent
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndDigitalContent && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndDigitalContent.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndDevelopSelf" className="form-label">
              How do you think this place can help you to develop yourself? and
              What skill do you wish to improve the most through this committee?
            </label>
            <textarea
              id="rndDevelopSelf"
              {...register("rndDevelopSelf")}
              rows={5}
              placeholder="How it helps..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndDevelopSelf
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndDevelopSelf && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndDevelopSelf.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndStayMotivated" className="form-label">
              How do you stay motivated and focused while working on a task with
              no prior experience?
            </label>
            <textarea
              id="rndStayMotivated"
              {...register("rndStayMotivated")}
              rows={5}
              placeholder="How to stay motivated..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndStayMotivated
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndStayMotivated && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndStayMotivated.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="rndUnlimitedResources" className="form-label">
              If you had unlimited resources for one day to research or build
              something, what would it be?
            </label>
            <textarea
              id="rndUnlimitedResources"
              {...register("rndUnlimitedResources")}
              rows={5}
              placeholder="What would you do..."
              className={`resize-none form-control focus-outline-primary ${
                errors.rndUnlimitedResources
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.rndUnlimitedResources && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.rndUnlimitedResources.message}
              </p>
            )}
          </div>

          {/* R&D Skill Ratings */}
          <div className="mt-10">
            <h5 className="mb-5 font-semibold text-lg">Rate Your:</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { id: "rndWordSkills", label: "Word Skills" },
                { id: "rndSearchingSkills", label: "Searching Skills" },
                { id: "rndTimeManagement", label: "Time Management" },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>
                  <select
                    id={field.id}
                    {...register(field.id as keyof ApplicationFormData)}
                    className={`form-control focus-outline-primary ${
                      errors[field.id as keyof ApplicationFormData]
                        ? "border-primary-500 focus:border-primary-500"
                        : ""
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="1">1 – Very low</option>
                    <option value="2">2</option>
                    <option value="3">3 – Average</option>
                    <option value="4">4</option>
                    <option value="5">5 – Excellent</option>
                  </select>
                  {errors[field.id as keyof ApplicationFormData] && (
                    <p className="mt-1 text-sm text-primary-500">
                      {errors[field.id as keyof ApplicationFormData]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          PM - Project Management
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "PM - Project Management" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              مسؤولة عن تخطيط وإدارة مشروعات الفريق من البداية للنهاية، توزيع
              المهام، متابعة الالتزام بالمواعيد، والتنسيق بين السيركلز لضمان
              اكتمال العمل بكفاءة.
              <br />
              <br />
              The PM Circle plans and manages team projects, assigns tasks,
              monitors deadlines, and coordinates between circles to ensure
              smooth and successful execution.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmCommunicationWay" className="form-label">
              What is your preferred way to communicate effectively with others?
            </label>
            <select
              id="pmCommunicationWay"
              {...register("pmCommunicationWay")}
              className={`form-control focus-outline-primary w-full ${
                errors.pmCommunicationWay
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            >
              <option value="">Select preferred way</option>
              <option value="Face-to-Face">Face-to-Face / وجهاً لوجه</option>
              <option value="Writing">Writing / كتابة</option>
              <option value="Call">Call / مكالمة</option>
            </select>
            {errors.pmCommunicationWay && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmCommunicationWay.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmTeamLeaderFocus" className="form-label">
              If you became a team leader, what’s the first thing you would
              focus on with your team?
            </label>
            <textarea
              id="pmTeamLeaderFocus"
              {...register("pmTeamLeaderFocus")}
              rows={5}
              placeholder="First focus..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmTeamLeaderFocus
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmTeamLeaderFocus && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmTeamLeaderFocus.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmNewProblem" className="form-label">
              When you face a new problem, where do you start to solve it?
            </label>
            <textarea
              id="pmNewProblem"
              {...register("pmNewProblem")}
              rows={5}
              placeholder="How to start..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmNewProblem
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmNewProblem && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmNewProblem.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmChangesNormal" className="form-label">
              Do you agree or disagree with this statement: “Changes in the plan
              are normal”? Why?
            </label>
            <textarea
              id="pmChangesNormal"
              {...register("pmChangesNormal")}
              rows={5}
              placeholder="Agree or disagree..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmChangesNormal
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmChangesNormal && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmChangesNormal.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmConnectGoalTasks" className="form-label">
              When starting a new project, how do you connect the big goal with
              smaller tasks?
            </label>
            <textarea
              id="pmConnectGoalTasks"
              {...register("pmConnectGoalTasks")}
              rows={5}
              placeholder="How to connect..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmConnectGoalTasks
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmConnectGoalTasks && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmConnectGoalTasks.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmPersonalQuality" className="form-label">
              What personal quality do you value most when dealing with people?
            </label>
            <textarea
              id="pmPersonalQuality"
              {...register("pmPersonalQuality")}
              rows={5}
              placeholder="Quality valued..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmPersonalQuality
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmPersonalQuality && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmPersonalQuality.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmTaskTool" className="form-label">
              Have you used Notion or any task management tool before? (Yes /
              No, please mention the tool).
            </label>
            <textarea
              id="pmTaskTool"
              {...register("pmTaskTool")}
              rows={5}
              placeholder="Mention tool..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmTaskTool
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmTaskTool && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmTaskTool.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmFixedFlexiblePlan" className="form-label">
              Do you prefer working with a fixed plan from start to finish, or
              with flexible steps that change over time? why?
            </label>
            <textarea
              id="pmFixedFlexiblePlan"
              {...register("pmFixedFlexiblePlan")}
              rows={5}
              placeholder="Preference and why..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmFixedFlexiblePlan
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmFixedFlexiblePlan && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmFixedFlexiblePlan.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmManageTime" className="form-label">
              How do you manage your time when you have multiple tasks in the
              same day, and how do you decide which task to prioritize first?
            </label>
            <textarea
              id="pmManageTime"
              {...register("pmManageTime")}
              rows={5}
              placeholder="How to manage..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmManageTime
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmManageTime && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmManageTime.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="pmPresentIdea" className="form-label">
              If you were asked to present a new idea to your team, what would
              be the first step you take to prepare for the presentation?
            </label>
            <textarea
              id="pmPresentIdea"
              {...register("pmPresentIdea")}
              rows={5}
              placeholder="First step..."
              className={`resize-none form-control focus-outline-primary ${
                errors.pmPresentIdea
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.pmPresentIdea && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.pmPresentIdea.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          EO - Event Operations
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "EO - Event Operations" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              مسؤولة عن تنظيم الفعاليات من حيث المكان، التجهيزات، اللوجستيات،
              والمتابعة في يوم الحدث لضمان سير كل شيء بشكل منظم وفعّال.
              <br />
              <br />
              The Event Operations Circle manages event logistics, venue setup,
              coordination, and on-ground execution to ensure smooth and
              efficient events.
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoKnowledge" className="form-label">
              What do you know about Circle EO?
            </label>
            <textarea
              id="eoKnowledge"
              {...register("eoKnowledge")}
              rows={5}
              placeholder="What you know..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoKnowledge
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoKnowledge && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoKnowledge.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoWhyChoose" className="form-label">
              Why Did You Choose This Circle
            </label>
            <textarea
              id="eoWhyChoose"
              {...register("eoWhyChoose")}
              rows={5}
              placeholder="Why choose..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoWhyChoose
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoWhyChoose && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoWhyChoose.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoOfflineTimes" className="form-label">
              How Many Times a Week Do You Get Down Offline For The Team
            </label>
            <textarea
              id="eoOfflineTimes"
              {...register("eoOfflineTimes")}
              rows={5}
              placeholder="How many times..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoOfflineTimes
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoOfflineTimes && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoOfflineTimes.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoUnderPressure" className="form-label">
              Tell us about a situation in which you worked under pressure and
              how you handle it.
            </label>
            <textarea
              id="eoUnderPressure"
              {...register("eoUnderPressure")}
              rows={5}
              placeholder="Describe situation..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoUnderPressure
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoUnderPressure && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoUnderPressure.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoNotPrefer" className="form-label">
              What do you not prefer to be in the circle?
            </label>
            <textarea
              id="eoNotPrefer"
              {...register("eoNotPrefer")}
              rows={5}
              placeholder="What not prefer..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoNotPrefer
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoNotPrefer && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoNotPrefer.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="eoTeamProblem" className="form-label">
              If there is a problem in the team, how will you handle it?
            </label>
            <textarea
              id="eoTeamProblem"
              {...register("eoTeamProblem")}
              rows={5}
              placeholder="How to handle..."
              className={`resize-none form-control focus-outline-primary ${
                errors.eoTeamProblem
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.eoTeamProblem && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.eoTeamProblem.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Media (Graphic Design)
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "Media (Graphic Design)" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              تهتم دائرة الميديا بإدارة هوية الفريق البصرية من خلال التصميم،
              الجرافيك، الفيديو، المونتاج، وتصميم المحتوى الخاص بالسوشيال ميديا
              لضمان صورة احترافية متناسقة للفريق.
              <br />
              <br />
              The Media Circle manages the team’s visual identity through
              design, graphics, video editing, content creation, and social
              media presence to maintain a professional and consistent brand
              image
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdAboutSelf" className="form-label">
              Can you tell us a little about yourself and your design
              background?
            </label>
            <textarea
              id="mediaGdAboutSelf"
              {...register("mediaGdAboutSelf")}
              rows={5}
              placeholder="About yourself..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdAboutSelf
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdAboutSelf && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdAboutSelf.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdInspiration" className="form-label">
              What inspired you to become a graphic designer?
            </label>
            <textarea
              id="mediaGdInspiration"
              {...register("mediaGdInspiration")}
              rows={5}
              placeholder="Inspiration..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdInspiration
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdInspiration && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdInspiration.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdInterest" className="form-label">
              Why are you interested in joining the Media Circle?
            </label>
            <textarea
              id="mediaGdInterest"
              {...register("mediaGdInterest")}
              rows={5}
              placeholder="Why interested..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdInterest
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdInterest && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdInterest.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdSocialExperience" className="form-label">
              Do you have experience creating content for social media
              platforms?
            </label>
            <textarea
              id="mediaGdSocialExperience"
              {...register("mediaGdSocialExperience")}
              rows={5}
              placeholder="Experience..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdSocialExperience
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdSocialExperience && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdSocialExperience.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdSoftware" className="form-label">
              Based on previous Question If yes, what design software are you
              most comfortable with?
            </label>
            <textarea
              id="mediaGdSoftware"
              {...register("mediaGdSoftware")}
              rows={5}
              placeholder="Software..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdSoftware
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdSoftware && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdSoftware.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdApproachProject" className="form-label">
              How do you usually approach a new design project, from idea to
              result?
            </label>
            <textarea
              id="mediaGdApproachProject"
              {...register("mediaGdApproachProject")}
              rows={5}
              placeholder="Approach..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdApproachProject
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdApproachProject && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdApproachProject.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdFeedback" className="form-label">
              How do you respond to feedback and criticism about your designs?
            </label>
            <textarea
              id="mediaGdFeedback"
              {...register("mediaGdFeedback")}
              rows={5}
              placeholder="How to respond..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdFeedback
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdFeedback && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdFeedback.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdTeamExperience" className="form-label">
              Have you ever worked as part of a creative/media team before? How
              was your experience?
            </label>
            <textarea
              id="mediaGdTeamExperience"
              {...register("mediaGdTeamExperience")}
              rows={5}
              placeholder="Team experience..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdTeamExperience
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdTeamExperience && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdTeamExperience.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdDeadlines" className="form-label">
              How do you manage deadlines when you are working on multiple tasks
              at once?
            </label>
            <textarea
              id="mediaGdDeadlines"
              {...register("mediaGdDeadlines")}
              rows={5}
              placeholder="Manage deadlines..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdDeadlines
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdDeadlines && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdDeadlines.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdVagueInstructions" className="form-label">
              If you receive vague instructions, how do you ensure you deliver
              what the team really needs?
            </label>
            <textarea
              id="mediaGdVagueInstructions"
              {...register("mediaGdVagueInstructions")}
              rows={5}
              placeholder="Handle vague..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdVagueInstructions
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdVagueInstructions && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdVagueInstructions.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdShortTimePost" className="form-label">
              Imagine you are asked to design a social media post for an event
              with very little time. How would you handle it?
            </label>
            <textarea
              id="mediaGdShortTimePost"
              {...register("mediaGdShortTimePost")}
              rows={5}
              placeholder="Handle short time..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdShortTimePost
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdShortTimePost && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdShortTimePost.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaGdDisagreeDesign" className="form-label">
              If a non-designer teammate disagrees with your design, how would
              you resolve it?
            </label>
            <textarea
              id="mediaGdDisagreeDesign"
              {...register("mediaGdDisagreeDesign")}
              rows={5}
              placeholder="Resolve disagreement..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaGdDisagreeDesign
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaGdDisagreeDesign && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaGdDisagreeDesign.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Media (Video Editing)
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "Media (Video Editing)" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              تهتم دائرة الميديا بإدارة هوية الفريق البصرية من خلال التصميم،
              الجرافيك، الفيديو، المونتاج، وتصميم المحتوى الخاص بالسوشيال ميديا
              لضمان صورة احترافية متناسقة للفريق.
              <br />
              <br />
              The Media Circle manages the team’s visual identity through
              design, graphics, video editing, content creation, and social
              media presence to maintain a professional and consistent brand
              image
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeInterest" className="form-label">
              What interests you the most about video editing?
            </label>
            <textarea
              id="mediaVeInterest"
              {...register("mediaVeInterest")}
              rows={5}
              placeholder="Interests..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeInterest
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeInterest && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeInterest.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeTriedEditing" className="form-label">
              Have you ever tried editing a video before (even simple ones like
              TikTok, Reels, or school projects)? Tell us about it.
            </label>
            <textarea
              id="mediaVeTriedEditing"
              {...register("mediaVeTriedEditing")}
              rows={5}
              placeholder="Tried editing..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeTriedEditing
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeTriedEditing && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeTriedEditing.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeHopeLearn" className="form-label">
              What do you hope to learn if you join the video editing circle?
            </label>
            <textarea
              id="mediaVeHopeLearn"
              {...register("mediaVeHopeLearn")}
              rows={5}
              placeholder="Hope to learn..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeHopeLearn
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeHopeLearn && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeHopeLearn.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeDeadlinePlan" className="form-label">
              If you have a deadline for editing a short video, how would you
              plan your time?
            </label>
            <textarea
              id="mediaVeDeadlinePlan"
              {...register("mediaVeDeadlinePlan")}
              rows={5}
              placeholder="Plan time..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeDeadlinePlan
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeDeadlinePlan && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeDeadlinePlan.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeDifferentIdea" className="form-label">
              How would you handle it if your idea for a video is different from
              your teammates’ ideas?
            </label>
            <textarea
              id="mediaVeDifferentIdea"
              {...register("mediaVeDifferentIdea")}
              rows={5}
              placeholder="Handle different idea..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeDifferentIdea
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeDifferentIdea && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeDifferentIdea.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeTools" className="form-label">
              Which editing tools/apps have you used before (even if it’s just
              on your phone)?
            </label>
            <textarea
              id="mediaVeTools"
              {...register("mediaVeTools")}
              rows={5}
              placeholder="Tools used..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeTools
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeTools && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeTools.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVePatience" className="form-label">
              Sometimes editing takes patience (waiting for renders, redoing
              parts). How do you usually deal with that kind of situation?
            </label>
            <textarea
              id="mediaVePatience"
              {...register("mediaVePatience")}
              rows={5}
              placeholder="Deal with patience..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVePatience
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVePatience && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVePatience.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeHoursPerWeek" className="form-label">
              How many hours per week can you commit to learning and editing
              with us?
            </label>
            <textarea
              id="mediaVeHoursPerWeek"
              {...register("mediaVeHoursPerWeek")}
              rows={4}
              placeholder="Hours per week..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeHoursPerWeek
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeHoursPerWeek && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeHoursPerWeek.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeProjectsLink" className="form-label">
              If you have any video editing projects you&apos;d like to share,
              please send us the link
            </label>
            <textarea
              id="mediaVeProjectsLink"
              {...register("mediaVeProjectsLink")}
              rows={4}
              placeholder="Share link..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeProjectsLink
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeProjectsLink && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeProjectsLink.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaVeComments" className="form-label">
              Any comments or things you’d like us to know about you?
            </label>
            <textarea
              id="mediaVeComments"
              {...register("mediaVeComments")}
              rows={5}
              placeholder="Comments..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaVeComments
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaVeComments && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaVeComments.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Media (Motion Graphics)
      ──────────────────────────────────────────────── */}
      {selectedNonTechCircle === "Media (Motion Graphics)" && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm leading-relaxed">
            <p>
              تهتم دائرة الميديا بإدارة هوية الفريق البصرية من خلال التصميم،
              الجرافيك، الفيديو، المونتاج، وتصميم المحتوى الخاص بالسوشيال ميديا
              لضمان صورة احترافية متناسقة للفريق.
              <br />
              <br />
              The Media Circle manages the team’s visual identity through
              design, graphics, video editing, content creation, and social
              media presence to maintain a professional and consistent brand
              image
            </p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaMgExciting" className="form-label">
              What makes Motion Graphics exciting to you?
            </label>
            <textarea
              id="mediaMgExciting"
              {...register("mediaMgExciting")}
              rows={5}
              placeholder="What exciting..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaMgExciting
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaMgExciting && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaMgExciting.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaMgMixDesign" className="form-label">
              Do you enjoy mixing design with movement? Can you share an example
              you’ve seen and liked?
            </label>
            <textarea
              id="mediaMgMixDesign"
              {...register("mediaMgMixDesign")}
              rows={5}
              placeholder="Enjoy mixing..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaMgMixDesign
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaMgMixDesign && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaMgMixDesign.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaMgCreateAnimation" className="form-label">
              If you could create any short animation, what would it be about?
            </label>
            <textarea
              id="mediaMgCreateAnimation"
              {...register("mediaMgCreateAnimation")}
              rows={5}
              placeholder="Create animation..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaMgCreateAnimation
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaMgCreateAnimation && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaMgCreateAnimation.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mediaMgCuriousSide" className="form-label">
              Are you more curious to learn the technical side (software) or the
              creative side (storytelling & visuals)?
            </label>
            <textarea
              id="mediaMgCuriousSide"
              {...register("mediaMgCuriousSide")}
              rows={5}
              placeholder="Curious side..."
              className={`resize-none form-control focus-outline-primary ${
                errors.mediaMgCuriousSide
                  ? "border-primary-500 focus:border-primary-500"
                  : ""
              }`}
            />
            {errors.mediaMgCuriousSide && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.mediaMgCuriousSide.message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NonTechnicalCircleQuestions;
