import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { AdBanner } from '../components/AdBanner';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-neutral-50 text-center">
        <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">Briefing Not Found</h2>
        <p className="text-sm text-neutral-600 mb-6">The executive briefing you requested does not exist.</p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Insights</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link to="/" className="hover:text-neutral-900">Home</Link>
          <span>/</span>
          <Link to="/insights" className="hover:text-neutral-900">Insights</Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium truncate">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif font-bold text-sm">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{article.author.name}</div>
              <div className="text-xs text-neutral-400">{article.author.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Key Takeaways Box */}
        <div className="bg-amber-50/70 border border-amber-200 p-6 sm:p-8 space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-900">
            Executive Summary & Key Takeaways
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prose Body */}
        <div className="space-y-6 text-neutral-800 text-sm sm:text-base leading-relaxed bg-white p-8 sm:p-12 border border-neutral-200">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Workspace Solution Banner */}
        <div className="bg-neutral-900 text-white p-8 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              Recommended Solution
            </div>
            <h3 className="text-lg font-serif font-bold text-white">
              Explore Our Related Workspace Architecture
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              See how ourspace implements these exact real estate and acoustic benchmarks in our centres.
            </p>
          </div>
          <Link
            to={`/solutions/${article.relatedSolutionSlug}`}
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
          >
            <span>View Solution</span>
          </Link>
        </div>

        {/* Back Link */}
        <div className="pt-4">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-950"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Executive Briefings</span>
          </Link>
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
