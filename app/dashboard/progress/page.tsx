'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Flame, BookOpen, Video, FileText, Target } from 'lucide-react';

const progressData = {
  overallProgress: 35,
  currentStreak: 7,
  coursesCompleted: 1,
  videosWatched: 5,
  quizzesCompleted: 2,
  languages: [
    { name: 'Java', progress: 45, completed: 2, total: 4 },
    { name: 'Python', progress: 30, completed: 1, total: 4 },
    { name: 'PHP', progress: 20, completed: 0, total: 4 },
    { name: 'C#', progress: 15, completed: 0, total: 4 },
  ],
};

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Progress Tracking</h1>
        <p className="text-slate-400 mt-1">Monitor your learning journey and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{progressData.overallProgress}%</div>
            <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progressData.overallProgress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Learning Streak</CardTitle>
            <Flame className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{progressData.currentStreak} days</div>
            <p className="text-xs text-slate-400 mt-1">Keep it up!</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Videos Watched</CardTitle>
            <Video className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{progressData.videosWatched}</div>
            <p className="text-xs text-slate-400 mt-1">Total watched</p>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Quizzes Completed</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{progressData.quizzesCompleted}</div>
            <p className="text-xs text-slate-400 mt-1">Total completed</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white">Progress by Language</CardTitle>
          <CardDescription className="text-slate-400">Track your progress for each programming language</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {progressData.languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-white font-medium">{lang.name}</span>
                </div>
                <span className="text-sm text-slate-400">
                  {lang.completed}/{lang.total} courses
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${lang.progress}%` }}
                />
              </div>
              <div className="text-xs text-slate-400">{lang.progress}% complete</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

