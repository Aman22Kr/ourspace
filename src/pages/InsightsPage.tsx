import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';
import { AdBanner } from '../components/AdBanner';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Workplace Strategy', 'ESG & Sustainability', 'Global Expansion'];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art: Article) => {
      if (selectedCategory !== 'All' && art.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesExcerpt = art.excerpt.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Executive Intelligence
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Market Briefings & Thought Leadership
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Proprietary research, commercial leasing trends, ESG benchmarks, and APAC cross-border expansion guides for corporate decision makers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter & Search Bar */}
        <div className="bg-white border border-neutral-200 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search briefings..."
              aria-label="Search briefings"
              className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:border-neutral-400 transition-colors"
            >
              <div className="space-y-4">
                <div className="text-xs text-neutral-500 flex items-center gap-2">
                  <span className="font-semibold text-amber-800">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-lg font-serif font-bold text-neutral-900 leading-snug">
                  <Link to={`/insights/${article.slug}`} className="hover:text-amber-800">
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Key Takeaway snippet */}
                <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500">
                  <strong className="text-neutral-800">Key takeaway:</strong> {article.keyTakeaways[0]}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-900">{article.author.name}</div>
                  <div className="text-[10px] text-neutral-400">{article.publishDate}</div>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-amber-700"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
