"use client";
import React from "react";

interface Topic {
  name: string;
  timeToFinish: string;
  freeResources: string[];
  caseBasedProblems: string[];
}

interface Phase {
  id: number;
  name: string;
  duration: string;
  topics?: Topic[];
  resources?: string[];
  status: string;
}

// This component will be integrated into the main roadmap page
// It provides the interactive Begin Phase functionality with modals
export function PhaseInteractiveSection({
  phase,
  expandedPhase,
  setExpandedPhase,
  selectedTopic,
  setSelectedTopic,
  showFeedbackModal,
  setShowFeedbackModal,
  feedbackSummary,
  setFeedbackSummary,
}: {
  phase: Phase;
  expandedPhase: number | null;
  setExpandedPhase: (id: number | null) => void;
  selectedTopic: { phaseId: number; topicName: string } | null;
  setSelectedTopic: (topic: { phaseId: number; topicName: string } | null) => void;
  showFeedbackModal: boolean;
  setShowFeedbackModal: (show: boolean) => void;
  feedbackSummary: string;
  setFeedbackSummary: (summary: string) => void;
}) {
  if (expandedPhase !== phase.id) {
    return null;
  }

  const topics = phase.topics ?? [];

  return (
    <div className="mt-6 rounded-3xl border border-outline-variant bg-surface-container-low p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Phase roadmap</h4>
          <p className="text-body-sm text-on-surface-variant max-w-2xl">
            Expand this phase to see topic-level learning steps, resources, and case-based problems.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setExpandedPhase(null)}
          className="px-4 py-2 border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded font-bold text-label-sm uppercase transition-colors"
        >
          Collapse
        </button>
      </div>

      {topics.length > 0 ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {topics.map((topic, index) => (
            <button
              key={`${topic.name}-${index}`}
              type="button"
              onClick={() => setSelectedTopic({ phaseId: phase.id, topicName: topic.name })}
              className="group rounded-3xl border border-outline-variant bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-primary hover:bg-surface-container-high"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h5 className="text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {topic.name}
                  </h5>
                  <p className="text-label-sm text-on-surface-variant mt-2">Duration: {topic.timeToFinish}</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-body-sm text-on-surface-variant">
                <div>
                  <div className="font-semibold text-on-surface">Resources</div>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {topic.freeResources.map((resource, resourceIndex) => (
                      <li key={`${resource}-${resourceIndex}`}>{resource}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-on-surface">Case-Based Problems</div>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {topic.caseBasedProblems.map((item, itemIndex) => (
                      <li key={`${item}-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-surface p-6 text-on-surface-variant border border-dashed border-outline-variant">
          <p>No topics are available for this phase yet. Please click &apos;Begin Phase&apos; to load the roadmap or wait for AI generation to finish.</p>
        </div>
      )}

      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-xl rounded-3xl border border-outline-variant bg-surface p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-headline-md text-on-surface font-bold">{selectedTopic.topicName}</h3>
                <p className="text-label-sm text-on-surface-variant mt-1">Choose your learning path and get personalized feedback.</p>
              </div>
              <button onClick={() => setSelectedTopic(null)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4">
              <button className="w-full rounded-3xl border border-outline-variant bg-surface p-4 text-left transition-all hover:border-primary hover:bg-surface-container-high">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">library_books</span>
                  <div>
                    <p className="font-bold text-on-surface">Resources</p>
                    <p className="text-label-xs text-on-surface-variant">Free tutorials and materials</p>
                  </div>
                </div>
              </button>

              <button className="w-full rounded-3xl border border-outline-variant bg-surface p-4 text-left transition-all hover:border-primary hover:bg-surface-container-high">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">quiz</span>
                  <div>
                    <p className="font-bold text-on-surface">Test Understanding & Projects</p>
                    <p className="text-label-xs text-on-surface-variant">Practice problems & projects</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setFeedbackSummary(
                    `Based on your progress in "${selectedTopic.topicName}", here are personalized recommendations:\n\n📌 Focus Areas:\n• Strengthen your understanding of core concepts - practice 2-3 more problems\n• Work through the case-based problems to apply theory\n• Review areas where you scored below 70%\n\n💡 Strengths:\n• Good grasp of fundamentals\n• Quick problem-solving ability\n\n🎯 Next Steps:\n1. Complete 5 practice problems from the resources\n2. Build a small project applying these concepts\n3. Review your weak areas before moving to next topic`
                  );
                  setShowFeedbackModal(true);
                  setSelectedTopic(null);
                }}
                className="w-full rounded-3xl border border-outline-variant bg-surface p-4 text-left transition-all hover:border-primary hover:bg-surface-container-high"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">rate_review</span>
                  <div>
                    <p className="font-bold text-on-surface">Feedback Loop</p>
                    <p className="text-label-xs text-on-surface-variant">Personalized recommendations</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setSelectedTopic(null)}
              className="mt-6 w-full rounded-3xl border border-outline-variant px-5 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:border-primary hover:text-on-surface"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-2xl rounded-3xl border border-outline-variant bg-surface p-8 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <h3 className="text-headline-md text-on-surface font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">insights</span>
                Your Personalized Feedback
              </h3>
              <button onClick={() => setShowFeedbackModal(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-4 text-body-sm text-on-surface-variant whitespace-pre-wrap">
              {feedbackSummary}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="rounded-3xl border border-outline-variant px-4 py-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:border-primary hover:text-on-surface"
              >
                Close
              </button>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="rounded-3xl bg-primary px-4 py-2 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-90"
              >
                Next Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
