'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Video, FileText } from 'lucide-react';

export default function OnboardingWelcome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            Welcome to OOP Learning Platform
          </CardTitle>
          <CardDescription className="text-slate-300 text-lg">
            Master Object-Oriented Programming in Java, Python, PHP, and C#
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <BookOpen className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-white mb-1">Course Materials</h3>
              <p className="text-sm text-slate-300">
                Access comprehensive slides and reading materials
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <Video className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-white mb-1">Video Lessons</h3>
              <p className="text-sm text-slate-300">
                Learn from YouTube video tutorials
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <FileText className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-white mb-1">Interactive Quizzes</h3>
              <p className="text-sm text-slate-300">
                Test your knowledge after each lesson
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
              <GraduationCap className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-white mb-1">Progress Tracking</h3>
              <p className="text-sm text-slate-300">
                Monitor your learning journey
              </p>
            </div>
          </div>
          <Button
            onClick={() => router.push('/onboarding/basic-info')}
            className="w-full bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

