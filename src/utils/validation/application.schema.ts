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
 * @param min - Minimum required length (default: 30)
 * @param max - Maximum allowed length (default: 2000)
 * @param field - Field name for error messages
 */
const longAnswer = (min = 30, max = 2000, field: string) =>
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
    whyJoinMEGA: longAnswer(50, 1800, "Why you want to join MEGA"),
    hopeToAchieve: longAnswer(40, 1500, "What you hope to achieve"),
    projectsInterest: longAnswer(40, 1200, "Project interest"),
    strengthsWeakness: longAnswer(60, 1400, "Key strengths and weakness"),
    proudAchievement: longAnswer(50, 1200, "Proudest achievement"),
    softSkills: longAnswer(50, 1400, "Soft skills & experiences"),
    balanceTime: longAnswer(40, 1000, "How you balance time"),
    teamMotivation: longAnswer(
      50,
      1200,
      "What motivates/demotivates you in teams",
    ),
    handleFeedback: longAnswer(40, 1000, "How you handle feedback"),
    neededHelp: longAnswer(60, 1200, "Time you needed help"),
    teamChallenge: longAnswer(70, 1400, "Team challenge experience"),
    newSkills: longAnswer(40, 1000, "Skills you want to gain"),
    describeYourself: longAnswer(20, 400, "Describe yourself in three words"),
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
      uiuxMeaning: 20,
      uiuxTools: 10,
      uiuxDifference: 30,
      uiuxPrinciples: 20,
      uiuxResearch: 30,

      // Frontend
      frontendHtml: 30,
      frontendHeadingTag: 5,
      frontendCssColor: 20,
      frontendJsVars: 40,
      frontendReactComponents: 40,

      // Backend
      backendClassObject: 30,
      backendDeleteTruncate: 30,
      backendSqlQuery: 10,
      backendInterfaceAbstract: 40,
      backendValueReference: 40,
      backendRest: 40,

      // Flutter
      flutterWidget: 40,
      flutterState: 40,
      flutterMainDart: 30,
      flutterSyncAsync: 30,
      flutterStateManagement: 40,

      // Data Science
      dataScienceTopics: 30,
      dataScienceTime: 20,
      dataScienceTools: 10,
      dataSciencePythonLevel: 20,
      dataScienceProject: 50,

      // CS - Computer Science
      csKeyword: 5,
      csArrayIndex: 5,
      csOopPrinciple: 30,
      csStlContainer: 20,
      csTimeComplexity: 30,

      // Business Analysis
      baRole: 40,
      baDifference: 50,
      baProject: 50,
      baRequirements: 50,
      baDiagrams: 40,
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
      hrWhyJoin: 50,
      hrExperience: 40,
      hrHandleMember: 50,
      hrQualities: 40,
      hrActivity: 50,
      hrRoleDescription: 40,
      hrImportantRule: 40,
      // HR ratings have no min length (they are select dropdowns)

      // PR&FR - Public Relations & Fundraising
      prfrWhyChoose: 50,
      prfrAddToCircle: 40,
      prfrSkillsAfterYear: 40,
      prfrConvinceOthers: 40,
      prfrSuddenTask: 40,
      prfrHoursPerWeek: 10,
      prfrAttendMeetings: 20,

      // R&D - Research & Development (text fields)
      rndKnowledge: 50,
      rndImportance: 40,
      rndLastBook: 40,
      rndDigitalContent: 30,
      rndDevelopSelf: 40,
      rndStayMotivated: 40,
      rndUnlimitedResources: 40,
      // R&D ratings have no min length

      // PM - Project Management
      pmCommunicationWay: 1, // This is a select dropdown, just needs to be selected
      pmTeamLeaderFocus: 40,
      pmNewProblem: 40,
      pmChangesNormal: 40,
      pmConnectGoalTasks: 40,
      pmPersonalQuality: 30,
      pmTaskTool: 20,
      pmFixedFlexiblePlan: 40,
      pmManageTime: 40,
      pmPresentIdea: 40,

      // EO - Event Operations
      eoKnowledge: 40,
      eoWhyChoose: 40,
      eoOfflineTimes: 20,
      eoUnderPressure: 40,
      eoNotPrefer: 30,
      eoTeamProblem: 40,

      // Media (Graphic Design)
      mediaGdAboutSelf: 40,
      mediaGdInspiration: 40,
      mediaGdInterest: 40,
      mediaGdSocialExperience: 30,
      mediaGdSoftware: 20,
      mediaGdApproachProject: 40,
      mediaGdFeedback: 30,
      mediaGdTeamExperience: 30,
      mediaGdDeadlines: 30,
      mediaGdVagueInstructions: 30,
      mediaGdShortTimePost: 30,
      mediaGdDisagreeDesign: 30,

      // Media (Video Editing)
      mediaVeInterest: 40,
      mediaVeTriedEditing: 30,
      mediaVeHopeLearn: 30,
      mediaVeDeadlinePlan: 30,
      mediaVeDifferentIdea: 30,
      mediaVeTools: 20,
      mediaVePatience: 30,
      mediaVeHoursPerWeek: 10,
      mediaVeProjectsLink: 10,
      mediaVeComments: 20,

      // Media (Motion Graphics)
      mediaMgExciting: 40,
      mediaMgMixDesign: 40,
      mediaMgCreateAnimation: 40,
      mediaMgCuriousSide: 40,
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