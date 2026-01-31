"use client";

import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { ApplicationFormData } from "@/utils/validation/application.schema";
import { memo } from "react";

interface TechnicalCircleQuestionsProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>;
}

/**
 * TechnicalCircleQuestions
 *
 * Conditional section for technical track questions based on selected circle.
 * Includes note about effort > perfect answers, and circle-specific long-answer / MCQ questions.
 *
 * Key Features & Optimizations:
 * - Conditional rendering per selected technical circle
 * - Bilingual labels and note
 * - Real-time validation with error messages
 * - Consistent form-control styling
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function TechnicalCircleQuestions({
  register,
  errors,
  watch,
}: TechnicalCircleQuestionsProps) {
  const selectedTechCircle = watch("technicalCircle");

  const commonNote = (
    <div className="md:col-span-2 text-sm text-neutral-700 bg-neutral-50 p-5 rounded-xl border border-neutral-200 mb-6 leading-relaxed">
      <strong className="text-neutral-900">Note / ملحوظة:</strong>
      في الجزء التقني، الأهم بالنسبة لنا هو المحاولة وبذل مجهود للوصول للمعلومة،
      مش شرط تكون كل الإجابات صحيحة 100%. اللي يهمنا أكتر هو طريقة تفكيرك
      ومحاولتك وحبك للتعلم والبحث.
      <br />
      <br />
      In the technical section, we care more about your effort and way of
      thinking than perfect answers. It’s okay if not all answers are correct.
      What matters most is that you try, search, and show how you approach
      problems and reach information.
    </div>
  );

  return (
    <div className="md:col-span-2 mt-8">
      <h4 className="mb-6 font-bold text-xl md:text-2xl text-gray-800">
        Technical Track / المسار التقني
      </h4>

      <div className="space-y-1.5 mb-8">
        <label htmlFor="technicalCircle" className="form-label block">
          Which technical circle would you like to apply for? / أي دائرة تقنية
          تريد التقديم لها؟ <span className="text-primary-500">*</span>
        </label>
        <select
          id="technicalCircle"
          {...register("technicalCircle")}
          className={`form-control focus-outline-primary w-full ${errors.technicalCircle ? "border-primary-500 focus:border-primary-500" : ""}`}
        >
          <option value="">Select circle / اختر الدائرة</option>
          <option value="UIUX">UI/UX</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Data Science">Data Science</option>
          <option value="CS - Computer Science">CS - Computer Science</option>
          <option value="Business Analysis">Business Analysis</option>
        </select>
        {errors.technicalCircle && (
          <p className="mt-1 text-sm text-primary-500">
            {errors.technicalCircle.message}
          </p>
        )}
      </div>

      {selectedTechCircle && commonNote}

      {/* ────────────────────────────────────────────────
          UI/UX Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "UIUX" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="uiuxMeaning" className="form-label">
              What do you think UI/UX design means in your own words? / ما هو
              تصميم UI/UX من وجهة نظرك بكلماتك الخاصة؟
            </label>
            <textarea
              id="uiuxMeaning"
              {...register("uiuxMeaning")}
              rows={6}
              placeholder="Explain in your own words..."
              className={`resize-none form-control focus-outline-primary ${errors.uiuxMeaning ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.uiuxMeaning && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.uiuxMeaning.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="uiuxTools" className="form-label">
              Have you ever used any design tools before (e.g., Figma, Adobe XD,
              Canva, Photoshop)? If yes, please mention which one(s)
            </label>
            <textarea
              id="uiuxTools"
              {...register("uiuxTools")}
              rows={4}
              placeholder="Mention tools..."
              className={`resize-none form-control focus-outline-primary ${errors.uiuxTools ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.uiuxTools && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.uiuxTools.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="uiuxDifference" className="form-label">
              What is the difference between UI and UX? Give a simple example
            </label>
            <textarea
              id="uiuxDifference"
              {...register("uiuxDifference")}
              rows={5}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.uiuxDifference ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.uiuxDifference && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.uiuxDifference.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="uiuxPrinciples" className="form-label">
              Can you mention two principles of good design?
            </label>
            <textarea
              id="uiuxPrinciples"
              {...register("uiuxPrinciples")}
              rows={4}
              placeholder="Mention principles..."
              className={`resize-none form-control focus-outline-primary ${errors.uiuxPrinciples ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.uiuxPrinciples && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.uiuxPrinciples.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="uiuxResearch" className="form-label">
              How do you usually do user research and usability testing? Give an
              example.
            </label>
            <textarea
              id="uiuxResearch"
              {...register("uiuxResearch")}
              rows={5}
              placeholder="Explain research..."
              className={`resize-none form-control focus-outline-primary ${errors.uiuxResearch ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.uiuxResearch && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.uiuxResearch.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Frontend Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "Frontend" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="frontendHtml" className="form-label">
              What is HTML and why do we use it?
            </label>
            <textarea
              id="frontendHtml"
              {...register("frontendHtml")}
              rows={5}
              placeholder="Explain HTML..."
              className={`resize-none form-control focus-outline-primary ${errors.frontendHtml ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.frontendHtml && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.frontendHtml.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="frontendHeadingTag" className="form-label">
              Write an HTML tag that creates a heading
            </label>
            <textarea
              id="frontendHeadingTag"
              {...register("frontendHeadingTag")}
              rows={3}
              placeholder="Write your answer here"
              className={`resize-none form-control focus-outline-primary font-mono ${errors.frontendHeadingTag ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.frontendHeadingTag && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.frontendHeadingTag.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="frontendCssColor" className="form-label">
              How can you change the text color using CSS? (Give a simple
              example)
            </label>
            <textarea
              id="frontendCssColor"
              {...register("frontendCssColor")}
              rows={4}
              placeholder="Write your answer here"
              className={`resize-none form-control focus-outline-primary font-mono ${errors.frontendCssColor ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.frontendCssColor && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.frontendCssColor.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="frontendJsVars" className="form-label">
              What is the difference between var, let, and const in JavaScript?
            </label>
            <textarea
              id="frontendJsVars"
              {...register("frontendJsVars")}
              rows={6}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.frontendJsVars ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.frontendJsVars && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.frontendJsVars.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="frontendReactComponents" className="form-label">
              What is the difference between class components and functional
              components in React?
            </label>
            <textarea
              id="frontendReactComponents"
              {...register("frontendReactComponents")}
              rows={6}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.frontendReactComponents ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.frontendReactComponents && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.frontendReactComponents.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Backend Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "Backend" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="backendClassObject" className="form-label">
              What is the difference between a Class and an Object in C#?
            </label>
            <textarea
              id="backendClassObject"
              {...register("backendClassObject")}
              rows={5}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.backendClassObject ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendClassObject && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendClassObject.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="backendDeleteTruncate" className="form-label">
              What is the difference between DELETE and TRUNCATE in SQL?
            </label>
            <textarea
              id="backendDeleteTruncate"
              {...register("backendDeleteTruncate")}
              rows={5}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.backendDeleteTruncate ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendDeleteTruncate && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendDeleteTruncate.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="backendSqlQuery" className="form-label">
              Write a SQL query to select all rows from a table named Students.
            </label>
            <textarea
              id="backendSqlQuery"
              {...register("backendSqlQuery")}
              rows={3}
              placeholder="Write your answer here"
              className={`resize-none form-control focus-outline-primary font-mono ${errors.backendSqlQuery ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendSqlQuery && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendSqlQuery.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="backendInterfaceAbstract" className="form-label">
              What is the difference between an Interface and an Abstract Class
              in C#?
            </label>
            <textarea
              id="backendInterfaceAbstract"
              {...register("backendInterfaceAbstract")}
              rows={6}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.backendInterfaceAbstract ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendInterfaceAbstract && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendInterfaceAbstract.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="backendValueReference" className="form-label">
              Explain the difference between Value Types and Reference Types in
              C#.
            </label>
            <textarea
              id="backendValueReference"
              {...register("backendValueReference")}
              rows={6}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.backendValueReference ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendValueReference && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendValueReference.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="backendRest" className="form-label">
              What is REST in web development, and why is it important for
              backend systems?
            </label>
            <textarea
              id="backendRest"
              {...register("backendRest")}
              rows={6}
              placeholder="Explain REST..."
              className={`resize-none form-control focus-outline-primary ${errors.backendRest ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.backendRest && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.backendRest.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Flutter Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "Flutter" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="flutterWidget" className="form-label">
              What is a Widget? Give as many examples as you can
            </label>
            <textarea
              id="flutterWidget"
              {...register("flutterWidget")}
              rows={6}
              placeholder="Explain widget..."
              className={`resize-none form-control focus-outline-primary ${errors.flutterWidget ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.flutterWidget && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.flutterWidget.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="flutterState" className="form-label">
              What is state? and What is the difference between stateless and
              stateful widgets?
            </label>
            <textarea
              id="flutterState"
              {...register("flutterState")}
              rows={6}
              placeholder="Explain state..."
              className={`resize-none form-control focus-outline-primary ${errors.flutterState ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.flutterState && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.flutterState.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="flutterMainDart" className="form-label">
              What is the difference between main.dart and other Dart files in a
              Flutter project?
            </label>
            <textarea
              id="flutterMainDart"
              {...register("flutterMainDart")}
              rows={5}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.flutterMainDart ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.flutterMainDart && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.flutterMainDart.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="flutterSyncAsync" className="form-label">
              Explain the difference between synchronous and asynchronous
              functions in Dart.
            </label>
            <textarea
              id="flutterSyncAsync"
              {...register("flutterSyncAsync")}
              rows={5}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.flutterSyncAsync ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.flutterSyncAsync && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.flutterSyncAsync.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="flutterStateManagement" className="form-label">
              Explain the concept of State Management in Flutter. Mention at
              least 2 approaches.
            </label>
            <textarea
              id="flutterStateManagement"
              {...register("flutterStateManagement")}
              rows={6}
              placeholder="Explain state management..."
              className={`resize-none form-control focus-outline-primary ${errors.flutterStateManagement ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.flutterStateManagement && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.flutterStateManagement.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Data Science Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "Data Science" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="dataScienceTopics" className="form-label">
              What are the main topics you want to learn in this circle?
            </label>
            <textarea
              id="dataScienceTopics"
              {...register("dataScienceTopics")}
              rows={5}
              placeholder="List topics..."
              className={`resize-none form-control focus-outline-primary ${errors.dataScienceTopics ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.dataScienceTopics && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.dataScienceTopics.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="dataScienceTime" className="form-label">
              How much time can you dedicate weekly to participating in the
              circle?
            </label>
            <textarea
              id="dataScienceTime"
              {...register("dataScienceTime")}
              rows={4}
              placeholder="Explain time..."
              className={`resize-none form-control focus-outline-primary ${errors.dataScienceTime ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.dataScienceTime && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.dataScienceTime.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="dataScienceTools" className="form-label">
              Have you ever used any basic tools or software for data analysis
              (e.g., Excel)?
            </label>
            <textarea
              id="dataScienceTools"
              {...register("dataScienceTools")}
              rows={4}
              placeholder="Mention tools..."
              className={`resize-none form-control focus-outline-primary ${errors.dataScienceTools ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.dataScienceTools && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.dataScienceTools.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="dataSciencePythonLevel" className="form-label">
              What is your skill level in using Python libraries related to data
              science (like pandas, numpy, matplotlib)?
            </label>
            <textarea
              id="dataSciencePythonLevel"
              {...register("dataSciencePythonLevel")}
              rows={5}
              placeholder="Describe level..."
              className={`resize-none form-control focus-outline-primary ${errors.dataSciencePythonLevel ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.dataSciencePythonLevel && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.dataSciencePythonLevel.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="dataScienceProject" className="form-label">
              Describe a complex data science project you have completed or
              contributed to
            </label>
            <textarea
              id="dataScienceProject"
              {...register("dataScienceProject")}
              rows={6}
              placeholder="Describe project..."
              className={`resize-none form-control focus-outline-primary ${errors.dataScienceProject ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.dataScienceProject && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.dataScienceProject.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          CS - Computer Science Questions (MCQ style)
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "CS - Computer Science" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="csKeyword" className="form-label">
              The keyword used when the condition is not true is:
            </label>
            <select
              id="csKeyword"
              {...register("csKeyword")}
              className={`form-control focus-outline-primary ${errors.csKeyword ? "border-primary-500 focus:border-primary-500" : ""}`}
            >
              <option value="">Select</option>
              <option value="and">and</option>
              <option value="or">or</option>
              <option value="not">not</option>
              <option value="false">false</option>
            </select>
            {errors.csKeyword && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.csKeyword.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="csArrayIndex" className="form-label">
              The index of the first element in an array starts at
            </label>
            <select
              id="csArrayIndex"
              {...register("csArrayIndex")}
              className={`form-control focus-outline-primary ${errors.csArrayIndex ? "border-primary-500 focus:border-primary-500" : ""}`}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="2">2</option>
            </select>
            {errors.csArrayIndex && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.csArrayIndex.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="csOopPrinciple" className="form-label">
              Which OOP principle is applied when data members are kept private
              and accessed via getter/setter methods?
            </label>
            <select
              id="csOopPrinciple"
              {...register("csOopPrinciple")}
              className={`form-control focus-outline-primary ${errors.csOopPrinciple ? "border-primary-500 focus:border-primary-500" : ""}`}
            >
              <option value="">Select</option>
              <option value="inheritance">inheritance</option>
              <option value="encapsulation">encapsulation</option>
              <option value="abstractions">abstractions</option>
              <option value="polymorphism">polymorphism</option>
            </select>
            {errors.csOopPrinciple && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.csOopPrinciple.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="csStlContainer" className="form-label">
              Which STL container automatically sorts elements and does not
              allow duplicates?
            </label>
            <select
              id="csStlContainer"
              {...register("csStlContainer")}
              className={`form-control focus-outline-primary ${errors.csStlContainer ? "border-primary-500 focus:border-primary-500" : ""}`}
            >
              <option value="">Select</option>
              <option value="Vector">Vector</option>
              <option value="list">list</option>
              <option value="set">set</option>
              <option value="multiset">multiset</option>
            </select>
            {errors.csStlContainer && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.csStlContainer.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="csTimeComplexity" className="form-label">
              What is the time complexity of inserting an element at the end of
              a vector?
            </label>
            <select
              id="csTimeComplexity"
              {...register("csTimeComplexity")}
              className={`form-control focus-outline-primary ${errors.csTimeComplexity ? "border-primary-500 focus:border-primary-500" : ""}`}
            >
              <option value="">Select</option>
              <option value="O(1)">O(1)</option>
              <option value="O(N)">O(N)</option>
              <option value="O(log n)">O(log n)</option>
              <option value="O(n^2)">O(n²)</option>
            </select>
            {errors.csTimeComplexity && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.csTimeComplexity.message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────
          Business Analysis Questions
      ──────────────────────────────────────────────── */}
      {selectedTechCircle === "Business Analysis" && (
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-1.5">
            <label htmlFor="baRole" className="form-label">
              How would you define the role of a Business Analyst in a software
              project?
            </label>
            <textarea
              id="baRole"
              {...register("baRole")}
              rows={5}
              placeholder="Define role..."
              className={`resize-none form-control focus-outline-primary ${errors.baRole ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.baRole && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.baRole.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="baDifference" className="form-label">
              In your opinion, how does Business Analysis differ from Business
              Development, and what skills are common between the two?
            </label>
            <textarea
              id="baDifference"
              {...register("baDifference")}
              rows={6}
              placeholder="Explain difference..."
              className={`resize-none form-control focus-outline-primary ${errors.baDifference ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.baDifference && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.baDifference.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="baProject" className="form-label">
              Can you describe a project you worked on, your role in it, and the
              value you added as a Business Analyst?
            </label>
            <textarea
              id="baProject"
              {...register("baProject")}
              rows={6}
              placeholder="Describe project..."
              className={`resize-none form-control focus-outline-primary ${errors.baProject ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.baProject && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.baProject.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="baRequirements" className="form-label">
              What are functional vs. non-functional requirements? Share
              examples of each from your experience?
            </label>
            <textarea
              id="baRequirements"
              {...register("baRequirements")}
              rows={6}
              placeholder="Explain requirements..."
              className={`resize-none form-control focus-outline-primary ${errors.baRequirements ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.baRequirements && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.baRequirements.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="baDiagrams" className="form-label">
              Which types of diagrams (e.g., Use Case, ERD, Class, DFD) have you
              worked with, and how did you use them in your projects?
            </label>
            <textarea
              id="baDiagrams"
              {...register("baDiagrams")}
              rows={6}
              placeholder="Mention diagrams..."
              className={`resize-none form-control focus-outline-primary ${errors.baDiagrams ? "border-primary-500 focus:border-primary-500" : ""}`}
            />
            {errors.baDiagrams && (
              <p className="mt-1 text-sm text-primary-500">
                {errors.baDiagrams.message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TechnicalCircleQuestions;
