import { z } from 'zod';

// ──────────────────────────────────────────────────────────────────────────
// Reusable regex patterns
// ──────────────────────────────────────────────────────────────────────────
const PHONE_REGEX = /^(?:\+20|0)1[0125][0-9]{8}$/;

// ──────────────────────────────────────────────────────────────────────────
// Helper functions for string validations
// ──────────────────────────────────────────────────────────────────────────

/**
 * Creates a required string validator with min and max length constraints
 * @param min - Minimum required length
 * @param max - Maximum allowed length
 * @param field - Field name for error messages
 */
const requiredString = (min: number, max: number, field: string) =>
  z
    .string()
    .trim()
    .min(min, { message: `${field} must be at least ${min} characters long` })
    .max(max, { message: `${field} cannot exceed ${max} characters` });

const optionalUrlField = z
  .string()
  .trim()
  .refine((val) => val === "" || /^https?:\/\/.+/.test(val), {
    message: "Please enter a valid URL",
  })
  .optional();

/**
 * Creates a validator for long-form text answers
 * @param min - Minimum required length (default: 10)
 * @param max - Maximum allowed length (default: 2000)
 * @param field - Field name for error messages
 */
const longAnswer = (min = 10, max = 2000, field: string) =>
  requiredString(min, max, field);

/**
 * Creates a validator for short-form text answers
 * @param min - Minimum required length (default: 2)
 * @param max - Maximum allowed length (default: 500)
 * @param field - Field name for error messages
 */
const shortAnswer = (min = 2, max = 500, field: string) =>
  requiredString(min, max, field);

/**
 * Validator for required URL fields
 */
const requiredUrlField = z
  .string()
  .trim()
  .min(1, { message: "This field is required" })
  .url({ message: "Please enter a valid URL" });

/**
 * Validator for 1-5 rating scale
 */
const rating1to5 = z.enum(["1", "2", "3", "4", "5"], {
  message: "Please select a rating from 1 to 5",
});

// ──────────────────────────────────────────────────────────────────────────
// Required fields per technical circle
// ──────────────────────────────────────────────────────────────────────────
const requiredTechnicalFields: Record<string, string[]> = {
  UIUX: [
    "uiuxMeaning",
    "uiuxTools",
    "uiuxDifference",
    "uiuxPrinciples",
    "uiuxResearch",
  ],
  Frontend: [
    "frontendHtml",
    "frontendHeadingTag",
    "frontendCssColor",
    "frontendJsVars",
    "frontendReactComponents",
  ],
  Backend: [
    "backendClassObject",
    "backendDeleteTruncate",
    "backendSqlQuery",
    "backendInterfaceAbstract",
    "backendValueReference",
    "backendRest",
  ],
  Flutter: [
    "flutterWidget",
    "flutterState",
    "flutterMainDart",
    "flutterSyncAsync",
    "flutterStateManagement",
  ],
  "Data Science": [
    "dataScienceTopics",
    "dataScienceTime",
    "dataScienceTools",
    "dataSciencePythonLevel",
    "dataScienceProject",
  ],
  "CS - Computer Science": [
    "csKeyword",
    "csArrayIndex",
    "csOopPrinciple",
    "csStlContainer",
    "csTimeComplexity",
  ],
  "Business Analysis": [
    "baRole",
    "baDifference",
    "baProject",
    "baRequirements",
    "baDiagrams",
  ],
};

// ──────────────────────────────────────────────────────────────────────────
// Required fields per non-technical circle
// ──────────────────────────────────────────────────────────────────────────
const requiredNonTechnicalFields: Record<string, string[]> = {
  "HR - Human Resources": [
    "hrWhyJoin",
    "hrExperience",
    "hrHandleMember",
    "hrQualities",
    "hrActivity",
    "hrRoleDescription",
    "hrImportantRule",
    "hrPunctualityCommitment",
    "hrActiveParticipation",
    "hrTeamworkCollaboration",
    "hrTimeManagement",
    "hrPositivityMotivation",
    "hrResponsibilityOwnership",
    "hrFlexibilityAdaptability",
    "hrRespectRules",
    "hrSolveProblems",
  ],
  "PR&FR - Public Relations & Fundraising": [
    "prfrWhyChoose",
    "prfrAddToCircle",
    "prfrSkillsAfterYear",
    "prfrConvinceOthers",
    "prfrSuddenTask",
    "prfrHoursPerWeek",
    "prfrAttendMeetings",
  ],
  "R&D - Research & Development": [
    "rndKnowledge",
    "rndImportance",
    "rndLastBook",
    "rndDigitalContent",
    "rndDevelopSelf",
    "rndStayMotivated",
    "rndUnlimitedResources",
    "rndWordSkills",
    "rndSearchingSkills",
    "rndTimeManagement",
  ],
  "PM - Project Management": [
    "pmCommunicationWay",
    "pmTeamLeaderFocus",
    "pmNewProblem",
    "pmChangesNormal",
    "pmConnectGoalTasks",
    "pmPersonalQuality",
    "pmTaskTool",
    "pmFixedFlexiblePlan",
    "pmManageTime",
    "pmPresentIdea",
  ],
  "EO - Event Operations": [
    "eoKnowledge",
    "eoWhyChoose",
    "eoOfflineTimes",
    "eoUnderPressure",
    "eoNotPrefer",
    "eoTeamProblem",
  ],
  "Media (Graphic Design)": [
    "mediaGdAboutSelf",
    "mediaGdInspiration",
    "mediaGdInterest",
    "mediaGdSocialExperience",
    "mediaGdSoftware",
    "mediaGdApproachProject",
    "mediaGdFeedback",
    "mediaGdTeamExperience",
    "mediaGdDeadlines",
    "mediaGdVagueInstructions",
    "mediaGdShortTimePost",
    "mediaGdDisagreeDesign",
  ],
  "Media (Video Editing)": [
    "mediaVeInterest",
    "mediaVeTriedEditing",
    "mediaVeHopeLearn",
    "mediaVeDeadlinePlan",
    "mediaVeDifferentIdea",
    "mediaVeTools",
    "mediaVePatience",
    "mediaVeHoursPerWeek",
    "mediaVeProjectsLink",
    "mediaVeComments",
  ],
  "Media (Motion Graphics)": [
    "mediaMgExciting",
    "mediaMgMixDesign",
    "mediaMgCreateAnimation",
    "mediaMgCuriousSide",
  ],
};

// ──────────────────────────────────────────────────────────────────────────
// Main schema
// ──────────────────────────────────────────────────────────────────────────
export const applicationSchema = z
  .object({
    // ──────────────────────────────────────────────────────────────
    // Core / always required fields
    // ──────────────────────────────────────────────────────────────
    fullName: shortAnswer(3, 120, "Full name"),
    email: z
      .string()
      .trim()
      .email({ message: "Please enter a valid email address" })
      .max(160),
    phoneNumber: z.string().trim().regex(PHONE_REGEX, {
      message:
        "Please enter a valid Egyptian mobile number (e.g., 01234567890 or +201234567890)",
    }),
    facebookLink: requiredUrlField,
    discordUsername: z
      .string()
      .trim()
      .min(1, { message: "This field is required" })
      .max(64)
      .optional(),
    linkedInLink: optionalUrlField,
    gitHubLink: optionalUrlField,
    university: shortAnswer(2, 120, "University").optional(),
    college: shortAnswer(2, 120, "College").optional(),
    academicYear: z
      .enum([
        "LVL 000 (for Engineering Students)",
        "First Year",
        "Second Year",
        "Third Year",
        "Fourth Year",
      ])
      .optional(),
    location: shortAnswer(2, 120, "Location").optional(),

    // ──────────────────────────────────────────────────────────────
    // Motivational & behavioral questions – always required
    // ──────────────────────────────────────────────────────────────
    whyJoinMEGA: longAnswer(10, 1800, "Why you want to join MEGA"),
    hopeToAchieve: longAnswer(10, 1500, "What you hope to achieve"),
    projectsInterest: longAnswer(10, 1200, "Project interest"),
    strengthsWeakness: longAnswer(10, 1400, "Key strengths and weakness"),
    proudAchievement: longAnswer(10, 1200, "Proudest achievement"),
    softSkills: longAnswer(10, 1400, "Soft skills & experiences"),
    balanceTime: longAnswer(10, 1000, "How you balance time"),
    teamMotivation: longAnswer(
      100,
      1200,
      "What motivates/demotivates you in teams",
    ),
    handleFeedback: longAnswer(10, 1000, "How you handle feedback"),
    neededHelp: longAnswer(10, 1200, "Time you needed help"),
    teamChallenge: longAnswer(10, 1400, "Team challenge experience"),
    newSkills: longAnswer(10, 1000, "Skills you want to gain"),
    describeYourself: longAnswer(10, 400, "Describe yourself in three words"),
    hoursPerWeek: z
      .string()
      .trim()
      .min(1, { message: "Please enter hours per week" })
      .regex(/^\d+$/, { message: "Must be a whole number" }),

    // ──────────────────────────────────────────────────────────────
    // General self-assessment ratings – optional
    // ──────────────────────────────────────────────────────────────
    commitmentOrganization: rating1to5.optional(),
    acceptanceFeedback: rating1to5.optional(),
    nervousnessShortTemper: rating1to5.optional(),
    followUpContinuity: rating1to5.optional(),
    emotionalStability: rating1to5.optional(),
    communication: rating1to5.optional(),

    // ──────────────────────────────────────────────────────────────
    // Track & Circle selection
    // ──────────────────────────────────────────────────────────────
    track: z.enum(["Technical Only", "Non-Technical Only", "Both"]).optional(),

    technicalCircle: z
      .enum([
        "UIUX",
        "Frontend",
        "Backend",
        "Flutter",
        "Data Science",
        "CS - Computer Science",
        "Business Analysis",
      ])
      .optional(),

    nonTechnicalCircle: z
      .enum([
        "HR - Human Resources",
        "PR&FR - Public Relations & Fundraising",
        "R&D - Research & Development",
        "PM - Project Management",
        "EO - Event Operations",
        "Media (Graphic Design)",
        "Media (Video Editing)",
        "Media (Motion Graphics)",
      ])
      .optional(),

    // ──────────────────────────────────────────────────────────────
    // Technical circle-specific fields (all optional at schema level)
    // ──────────────────────────────────────────────────────────────

    // UIUX
    uiuxMeaning: z.string().trim().optional(),
    uiuxTools: z.string().trim().optional(),
    uiuxDifference: z.string().trim().optional(),
    uiuxPrinciples: z.string().trim().optional(),
    uiuxResearch: z.string().trim().optional(),

    // Frontend
    frontendHtml: z.string().trim().optional(),
    frontendHeadingTag: z.string().trim().optional(),
    frontendCssColor: z.string().trim().optional(),
    frontendJsVars: z.string().trim().optional(),
    frontendReactComponents: z.string().trim().optional(),

    // Backend
    backendClassObject: z.string().trim().optional(),
    backendDeleteTruncate: z.string().trim().optional(),
    backendSqlQuery: z.string().trim().optional(),
    backendInterfaceAbstract: z.string().trim().optional(),
    backendValueReference: z.string().trim().optional(),
    backendRest: z.string().trim().optional(),

    // Flutter
    flutterWidget: z.string().trim().optional(),
    flutterState: z.string().trim().optional(),
    flutterMainDart: z.string().trim().optional(),
    flutterSyncAsync: z.string().trim().optional(),
    flutterStateManagement: z.string().trim().optional(),

    // Data Science
    dataScienceTopics: z.string().trim().optional(),
    dataScienceTime: z.string().trim().optional(),
    dataScienceTools: z.string().trim().optional(),
    dataSciencePythonLevel: z.string().trim().optional(),
    dataScienceProject: z.string().trim().optional(),

    // CS - Computer Science
    csKeyword: z.string().trim().optional(),
    csArrayIndex: z.string().trim().optional(),
    csOopPrinciple: z.string().trim().optional(),
    csStlContainer: z.string().trim().optional(),
    csTimeComplexity: z.string().trim().optional(),

    // Business Analysis
    baRole: z.string().trim().optional(),
    baDifference: z.string().trim().optional(),
    baProject: z.string().trim().optional(),
    baRequirements: z.string().trim().optional(),
    baDiagrams: z.string().trim().optional(),

    // ──────────────────────────────────────────────────────────────
    // Non-Technical circle-specific fields (all optional at schema level)
    // ──────────────────────────────────────────────────────────────

    // HR - Human Resources (text fields)
    hrWhyJoin: z.string().trim().optional(),
    hrExperience: z.string().trim().optional(),
    hrHandleMember: z.string().trim().optional(),
    hrQualities: z.string().trim().optional(),
    hrActivity: z.string().trim().optional(),
    hrRoleDescription: z.string().trim().optional(),
    hrImportantRule: z.string().trim().optional(),

    // HR - Human Resources (rating fields)
    hrPunctualityCommitment: rating1to5.optional(),
    hrActiveParticipation: rating1to5.optional(),
    hrTeamworkCollaboration: rating1to5.optional(),
    hrTimeManagement: rating1to5.optional(),
    hrPositivityMotivation: rating1to5.optional(),
    hrResponsibilityOwnership: rating1to5.optional(),
    hrFlexibilityAdaptability: rating1to5.optional(),
    hrRespectRules: rating1to5.optional(),
    hrSolveProblems: rating1to5.optional(),

    // PR&FR - Public Relations & Fundraising
    prfrWhyChoose: z.string().trim().optional(),
    prfrAddToCircle: z.string().trim().optional(),
    prfrSkillsAfterYear: z.string().trim().optional(),
    prfrConvinceOthers: z.string().trim().optional(),
    prfrSuddenTask: z.string().trim().optional(),
    prfrHoursPerWeek: z.string().trim().optional(),
    prfrAttendMeetings: z.string().trim().optional(),

    // R&D - Research & Development (text fields)
    rndKnowledge: z.string().trim().optional(),
    rndImportance: z.string().trim().optional(),
    rndLastBook: z.string().trim().optional(),
    rndDigitalContent: z.string().trim().optional(),
    rndDevelopSelf: z.string().trim().optional(),
    rndStayMotivated: z.string().trim().optional(),
    rndUnlimitedResources: z.string().trim().optional(),

    // R&D - Research & Development (rating fields)
    rndWordSkills: rating1to5.optional(),
    rndSearchingSkills: rating1to5.optional(),
    rndTimeManagement: rating1to5.optional(),

    // PM - Project Management
    pmCommunicationWay: z.string().trim().optional(),
    pmTeamLeaderFocus: z.string().trim().optional(),
    pmNewProblem: z.string().trim().optional(),
    pmChangesNormal: z.string().trim().optional(),
    pmConnectGoalTasks: z.string().trim().optional(),
    pmPersonalQuality: z.string().trim().optional(),
    pmTaskTool: z.string().trim().optional(),
    pmFixedFlexiblePlan: z.string().trim().optional(),
    pmManageTime: z.string().trim().optional(),
    pmPresentIdea: z.string().trim().optional(),

    // EO - Event Operations
    eoKnowledge: z.string().trim().optional(),
    eoWhyChoose: z.string().trim().optional(),
    eoOfflineTimes: z.string().trim().optional(),
    eoUnderPressure: z.string().trim().optional(),
    eoNotPrefer: z.string().trim().optional(),
    eoTeamProblem: z.string().trim().optional(),

    // Media (Graphic Design)
    mediaGdAboutSelf: z.string().trim().optional(),
    mediaGdInspiration: z.string().trim().optional(),
    mediaGdInterest: z.string().trim().optional(),
    mediaGdSocialExperience: z.string().trim().optional(),
    mediaGdSoftware: z.string().trim().optional(),
    mediaGdApproachProject: z.string().trim().optional(),
    mediaGdFeedback: z.string().trim().optional(),
    mediaGdTeamExperience: z.string().trim().optional(),
    mediaGdDeadlines: z.string().trim().optional(),
    mediaGdVagueInstructions: z.string().trim().optional(),
    mediaGdShortTimePost: z.string().trim().optional(),
    mediaGdDisagreeDesign: z.string().trim().optional(),

    // Media (Video Editing)
    mediaVeInterest: z.string().trim().optional(),
    mediaVeTriedEditing: z.string().trim().optional(),
    mediaVeHopeLearn: z.string().trim().optional(),
    mediaVeDeadlinePlan: z.string().trim().optional(),
    mediaVeDifferentIdea: z.string().trim().optional(),
    mediaVeTools: z.string().trim().optional(),
    mediaVePatience: z.string().trim().optional(),
    mediaVeHoursPerWeek: z.string().trim().optional(),
    mediaVeProjectsLink: z.string().trim().optional(),
    mediaVeComments: z.string().trim().optional(),

    // Media (Motion Graphics)
    mediaMgExciting: z.string().trim().optional(),
    mediaMgMixDesign: z.string().trim().optional(),
    mediaMgCreateAnimation: z.string().trim().optional(),
    mediaMgCuriousSide: z.string().trim().optional(),
  })

  // ──────────────────────────────────────────────────────────────
  // SuperRefine: Cross-field validation logic
  // ──────────────────────────────────────────────────────────────
  .superRefine((data, ctx) => {
    /**
     * Validates that required fields for a selected circle contain proper values
     * @param circle - The selected circle name
     * @param requiredFieldsMap - Map of circle names to their required field names
     * @param minLengths - Map of field names to minimum required lengths
     */
    const validateCircle = (
      circle: string | undefined,
      requiredFieldsMap: Record<string, string[]>,
      minLengths: Record<string, number>,
    ) => {
      if (!data.track) return;
      if (!circle) return;
      const requiredFields = requiredFieldsMap[circle];
      if (!requiredFields) return;

      requiredFields.forEach((field) => {
        const rawValue = data[field as keyof typeof data];
        const value = typeof rawValue === "string" ? rawValue.trim() : "";

        // Check if field is empty (required validation)
        if (!value) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: 1,
            origin: "string",
            inclusive: true,
            message: `This field is required for ${circle}`,
            path: [field],
          });
          return;
        }

        // Check minimum length requirement
        const min = minLengths[field];
        if (min && value.length < min) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: min,
            origin: "string",
            inclusive: true,
            message: `Must be at least ${min} characters for ${circle}`,
            path: [field],
          });
        }
      });
    };

    // ──────────────────────────────────────────────────────────────
    // Validate track selection
    // ──────────────────────────────────────────────────────────────

    // For "Technical Only" track, technical circle must be selected
    if (
      data.track &&
      data.track === "Technical Only" &&
      !data.technicalCircle
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select a technical circle for the Technical track",
        path: ["technicalCircle"],
      });
    }

    // For "Non-Technical Only" track, non-technical circle must be selected
    if (
      data.track &&
      data.track === "Non-Technical Only" &&
      !data.nonTechnicalCircle
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Please select a non-technical circle for the Non-Technical track",
        path: ["nonTechnicalCircle"],
      });
    }

    // For "Both" track, both circles must be selected
    if (data.track && data.track === "Both") {
      if (!data.technicalCircle) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a technical circle when choosing Both tracks",
          path: ["technicalCircle"],
        });
      }
      if (!data.nonTechnicalCircle) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Please select a non-technical circle when choosing Both tracks",
          path: ["nonTechnicalCircle"],
        });
      }
    }

    // ──────────────────────────────────────────────────────────────
    // Technical circle field validation
    // ──────────────────────────────────────────────────────────────
    const technicalMinLengths: Record<string, number> = {
      // UIUX
      uiuxMeaning: 10,
      uiuxTools: 10,
      uiuxDifference: 10,
      uiuxPrinciples: 10,
      uiuxResearch: 10,

      // Frontend
      frontendHtml: 10,
      frontendHeadingTag: 10,
      frontendCssColor: 10,
      frontendJsVars: 10,
      frontendReactComponents: 10,

      // Backend
      backendClassObject: 10,
      backendDeleteTruncate: 10,
      backendSqlQuery: 10,
      backendInterfaceAbstract: 10,
      backendValueReference: 10,
      backendRest: 10,

      // Flutter
      flutterWidget: 10,
      flutterState: 10,
      flutterMainDart: 10,
      flutterSyncAsync: 10,
      flutterStateManagement: 10,

      // Data Science
      dataScienceTopics: 10,
      dataScienceTime: 10,
      dataScienceTools: 10,
      dataSciencePythonLevel: 10,
      dataScienceProject: 10,

      // CS - Computer Science
      csKeyword: 1,
      csArrayIndex: 1,
      csOopPrinciple: 1,
      csStlContainer: 1,
      csTimeComplexity: 1,

      // Business Analysis
      baRole: 10,
      baDifference: 10,
      baProject: 10,
      baRequirements: 10,
      baDiagrams: 10,
    };

    validateCircle(
      data.technicalCircle,
      requiredTechnicalFields,
      technicalMinLengths,
    );

    // ──────────────────────────────────────────────────────────────
    // Non-technical circle field validation
    // ──────────────────────────────────────────────────────────────
    const nonTechnicalMinLengths: Record<string, number> = {
      // HR - Human Resources (text fields)
      hrWhyJoin: 10,
      hrExperience: 10,
      hrHandleMember: 10,
      hrQualities: 10,
      hrActivity: 10,
      hrRoleDescription: 10,
      hrImportantRule: 10,
      // HR ratings have no min length (they are select dropdowns)

      // PR&FR - Public Relations & Fundraising
      prfrWhyChoose: 10,
      prfrAddToCircle: 10,
      prfrSkillsAfterYear: 10,
      prfrConvinceOthers: 10,
      prfrSuddenTask: 10,
      prfrHoursPerWeek: 10,
      prfrAttendMeetings: 10,

      // R&D - Research & Development (text fields)
      rndKnowledge: 10,
      rndImportance: 10,
      rndLastBook: 10,
      rndDigitalContent: 10,
      rndDevelopSelf: 10,
      rndStayMotivated: 10,
      rndUnlimitedResources: 10,
      // R&D ratings have no min length

      // PM - Project Management
      pmCommunicationWay: 1, // This is a select dropdown, just needs to be selected
      pmTeamLeaderFocus: 10,
      pmNewProblem: 10,
      pmChangesNormal: 10,
      pmConnectGoalTasks: 10,
      pmPersonalQuality: 10,
      pmTaskTool: 10,
      pmFixedFlexiblePlan: 10,
      pmManageTime: 10,
      pmPresentIdea: 10,

      // EO - Event Operations
      eoKnowledge: 10,
      eoWhyChoose: 10,
      eoOfflineTimes: 10,
      eoUnderPressure: 10,
      eoNotPrefer: 10,
      eoTeamProblem: 10,

      // Media (Graphic Design)
      mediaGdAboutSelf: 10,
      mediaGdInspiration: 10,
      mediaGdInterest: 10,
      mediaGdSocialExperience: 10,
      mediaGdSoftware: 10,
      mediaGdApproachProject: 10,
      mediaGdFeedback: 10,
      mediaGdTeamExperience: 10,
      mediaGdDeadlines: 10,
      mediaGdVagueInstructions: 10,
      mediaGdShortTimePost: 10,
      mediaGdDisagreeDesign: 10,

      // Media (Video Editing)
      mediaVeInterest: 10,
      mediaVeTriedEditing: 10,
      mediaVeHopeLearn: 10,
      mediaVeDeadlinePlan: 10,
      mediaVeDifferentIdea: 10,
      mediaVeTools: 10,
      mediaVePatience: 10,
      mediaVeHoursPerWeek: 10,
      mediaVeProjectsLink: 10,
      mediaVeComments: 10,

      // Media (Motion Graphics)
      mediaMgExciting: 10,
      mediaMgMixDesign: 10,
      mediaMgCreateAnimation: 10,
      mediaMgCuriousSide: 10,
    };

    validateCircle(
      data.nonTechnicalCircle,
      requiredNonTechnicalFields,
      nonTechnicalMinLengths,
    );
  });

// ──────────────────────────────────────────────────────────────────────────
// Export type for frontend type safety
// ──────────────────────────────────────────────────────────────────────────
export type ApplicationFormData = z.infer<typeof applicationSchema>;