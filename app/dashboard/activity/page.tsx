'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BookOpen, Video, FileText, Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'quiz',
    action: 'Completed',
    title: 'Java OOP Quiz 1',
    score: 85,
    timestamp: '2 hours ago',
    icon: FileText,
  },
  {
    id: 2,
    type: 'video',
    action: 'Watched',
    title: 'Java OOP: Inheritance',
    timestamp: '1 day ago',
    icon: Video,
  },
  {
    id: 3,
    type: 'course',
    action: 'Accessed',
    title: 'Java OOP - Chapter 2',
    timestamp: '2 days ago',
    icon: BookOpen,
  },
  {
    id: 4,
    type: 'quiz',
    action: 'Completed',
    title: 'Python OOP Quiz 1',
    score: 92,
    timestamp: '3 days ago',
    icon: FileText,
  },
  {
    id: 5,
    type: 'video',
    action: 'Watched',
    title: 'Python OOP: Classes and Instances',
    timestamp: '4 days ago',
    icon: Video,
  },
];

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Activity Log</h1>
        <p className="text-slate-400 mt-1">Track all your learning activities and progress</p>
      </div>

      <Card className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white">Recent Activities</CardTitle>
          <CardDescription className="text-slate-400">Your learning history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-800 hover:bg-slate-800 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{activity.title}</p>
                        <p className="text-sm text-slate-400 mt-1">
                          {activity.action}
                          {activity.score && ` • Score: ${activity.score}%`}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        {activity.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

