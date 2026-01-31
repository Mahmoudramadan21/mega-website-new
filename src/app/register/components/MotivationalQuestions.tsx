"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";
import { memo } from "react";

interface MotivationalQuestionsProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

/**
 * MotivationalQuestions
 *
 * Long-answer motivational, behavioral, and commitment questions section.
 * All fields are required and presented as textareas (except hours commitment).
 *
 * Key Features & Optimizations:
 * - Bilingual labels (English / Arabic)
 * - Full-width fields (md:col-span-2) for better readability of long answers
 * - Real-time validation with error messages below each question
 * - Consistent styling via form-control + focus-outline-primary
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
function MotivationalQuestions({
  register,
  errors,
}: MotivationalQuestionsProps) {
  return (
    <>
      {/* Why do you want to join MEGA? */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="whyJoinMEGA" className="form-label">
          Why do you want to join MEGA? / لماذا تريد الانضمام إلى MEGA؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="whyJoinMEGA"
          {...register("whyJoinMEGA")}
          rows={5}
          placeholder="Tell us why..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.whyJoinMEGA ? "border-primary-400" : ""}
          `}
        />
        {errors.whyJoinMEGA && (
          <p id="whyJoinMEGA-error" className="mt-1 text-sm text-primary-500">
            {errors.whyJoinMEGA.message}
          </p>
        )}
      </div>

      {/* What do you hope to achieve? */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="hopeToAchieve" className="form-label">
          What do you hope to achieve by joining MEGA? / ما الذي تأمل أن تحققه
          من خلال انضمامك إلى MEGA؟ <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="hopeToAchieve"
          {...register("hopeToAchieve")}
          rows={5}
          placeholder="Tell us what you hope to achieve..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.hopeToAchieve ? "border-primary-400" : ""}
          `}
        />
        {errors.hopeToAchieve && (
          <p id="hopeToAchieve-error" className="mt-1 text-sm text-primary-500">
            {errors.hopeToAchieve.message}
          </p>
        )}
      </div>

      {/* Projects interest */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="projectsInterest" className="form-label">
          Which of our Projects interests you the most, and why? / أي من
          مشاريعنا يثير اهتمامك أكثر؟ ولماذا؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="projectsInterest"
          {...register("projectsInterest")}
          rows={5}
          placeholder="Tell us about the projects..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.projectsInterest ? "border-primary-400" : ""}
          `}
        />
        {errors.projectsInterest && (
          <p
            id="projectsInterest-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.projectsInterest.message}
          </p>
        )}
      </div>

      {/* Strengths & Weakness */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="strengthsWeakness" className="form-label">
          Could you please highlight three of your key strengths and one
          weakness? / هل يمكنك ذكر ثلاثة من نقاط قوتك الأساسية ونقطة ضعف واحدة؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="strengthsWeakness"
          {...register("strengthsWeakness")}
          rows={5}
          placeholder="Highlight your strengths and weakness..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.strengthsWeakness ? "border-primary-400" : ""}
          `}
        />
        {errors.strengthsWeakness && (
          <p
            id="strengthsWeakness-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.strengthsWeakness.message}
          </p>
        )}
      </div>

      {/* Proud achievement */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="proudAchievement" className="form-label">
          What is one achievement in your life that you are most proud of? / ما
          هو الإنجاز الذي تفخر به أكثر في حياتك؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="proudAchievement"
          {...register("proudAchievement")}
          rows={5}
          placeholder="Describe your achievement..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.proudAchievement ? "border-primary-400" : ""}
          `}
        />
        {errors.proudAchievement && (
          <p
            id="proudAchievement-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.proudAchievement.message}
          </p>
        )}
      </div>

      {/* Soft skills & experiences */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="softSkills" className="form-label">
          Mention any soft skills or experiences you have, and how they helped
          you in teamwork or university projects. / اذكر أي مهارات شخصية أو
          خبرات لديك، وكيف ساعدتك في العمل الجماعي أو مشاريع الجامعة.{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="softSkills"
          {...register("softSkills")}
          rows={5}
          placeholder="Mention your soft skills..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.softSkills ? "border-primary-400" : ""}
          `}
        />
        {errors.softSkills && (
          <p id="softSkills-error" className="mt-1 text-sm text-primary-500">
            {errors.softSkills.message}
          </p>
        )}
      </div>

      {/* Balance time */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="balanceTime" className="form-label">
          How do you balance your time between studying and volunteering? / كيف
          توازن بين وقت الدراسة والعمل التطوعي؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="balanceTime"
          {...register("balanceTime")}
          rows={5}
          placeholder="Explain how you balance..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.balanceTime ? "border-primary-400" : ""}
          `}
        />
        {errors.balanceTime && (
          <p id="balanceTime-error" className="mt-1 text-sm text-primary-500">
            {errors.balanceTime.message}
          </p>
        )}
      </div>

      {/* Team motivation */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="teamMotivation" className="form-label">
          What motivates you when working in a team, and what demotivates you? /
          ما الذي يحفّزك عند العمل ضمن فريق، وما الذي يُشعرك بعدم الحماس؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="teamMotivation"
          {...register("teamMotivation")}
          rows={5}
          placeholder="Describe motivations..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.teamMotivation ? "border-primary-400" : ""}
          `}
        />
        {errors.teamMotivation && (
          <p
            id="teamMotivation-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.teamMotivation.message}
          </p>
        )}
      </div>

      {/* Handle feedback */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="handleFeedback" className="form-label">
          How do you handle feedback and criticism? / كيف تتعامل مع الملاحظات
          والتقييمات (Feedback) أو النقد؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="handleFeedback"
          {...register("handleFeedback")}
          rows={5}
          placeholder="Explain how you handle..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.handleFeedback ? "border-primary-400" : ""}
          `}
        />
        {errors.handleFeedback && (
          <p
            id="handleFeedback-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.handleFeedback.message}
          </p>
        )}
      </div>

      {/* Needed help */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="neededHelp" className="form-label">
          Describe a time when you needed help with your work. How did you
          ask/deal with it? / صف موقفًا احتجت فيه إلى المساعدة في العمل. كيف
          طلبتها أو كيف تعاملت مع الموقف؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="neededHelp"
          {...register("neededHelp")}
          rows={5}
          placeholder="Describe the time..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.neededHelp ? "border-primary-400" : ""}
          `}
        />
        {errors.neededHelp && (
          <p id="neededHelp-error" className="mt-1 text-sm text-primary-500">
            {errors.neededHelp.message}
          </p>
        )}
      </div>

      {/* Team challenge */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="teamChallenge" className="form-label">
          Describe a time when you faced a challenge or problem in a team. How
          did you handle it, and what did you learn? / صف موقفًا واجهت فيه
          تحديًا أو مشكلة داخل فريق. كيف تعاملت معها، وما الدرس الذي تعلمته؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="teamChallenge"
          {...register("teamChallenge")}
          rows={5}
          placeholder="Describe the challenge..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.teamChallenge ? "border-primary-400" : ""}
          `}
        />
        {errors.teamChallenge && (
          <p id="teamChallenge-error" className="mt-1 text-sm text-primary-500">
            {errors.teamChallenge.message}
          </p>
        )}
      </div>

      {/* New skills */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="newSkills" className="form-label">
          What new skills or experiences are you looking to gain from joining
          MEGA? / ما المهارات أو الخبرات الجديدة التي ترغب في اكتسابها من خلال
          انضمامك إلى MEGA؟ <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="newSkills"
          {...register("newSkills")}
          rows={5}
          placeholder="What skills do you want..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.newSkills ? "border-primary-400" : ""}
          `}
        />
        {errors.newSkills && (
          <p id="newSkills-error" className="mt-1 text-sm text-primary-500">
            {errors.newSkills.message}
          </p>
        )}
      </div>

      {/* Hours per week */}
      <div className="space-y-1.5">
        <label htmlFor="hoursPerWeek" className="form-label">
          How many hours per week can you commit to MEGA? / كم ساعة أسبوعيًا
          يمكنك الالتزام بها مع MEGA؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <input
          id="hoursPerWeek"
          type="number"
          {...register("hoursPerWeek")}
          min="1"
          max="24"
          placeholder="Enter hours (e.g. 10)"
          className={`
            form-control focus-outline-primary
            ${errors.hoursPerWeek ? "border-primary-400" : ""}
          `}
        />
        {errors.hoursPerWeek && (
          <p id="hoursPerWeek-error" className="mt-1 text-sm text-primary-500">
            {errors.hoursPerWeek.message}
          </p>
        )}
      </div>

      {/* Describe yourself */}
      <div className="md:col-span-2 space-y-1.5">
        <label htmlFor="describeYourself" className="form-label">
          If you could describe yourself in three words, what would they be, and
          why? / إذا أردت وصف نفسك بثلاث كلمات، فماذا ستكون؟ ولماذا؟{" "}
          <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="describeYourself"
          {...register("describeYourself")}
          rows={5}
          placeholder="Describe yourself..."
          className={`
            resize-none form-control focus-outline-primary
            ${errors.describeYourself ? "border-primary-400" : ""}
          `}
        />
        {errors.describeYourself && (
          <p
            id="describeYourself-error"
            className="mt-1 text-sm text-primary-500"
          >
            {errors.describeYourself.message}
          </p>
        )}
      </div>
    </>
  );
}

export default MotivationalQuestions;
