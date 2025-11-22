'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quizzes = [
  {
    id: 1,
    title: 'Java OOP Quiz 1',
    description: 'Test your knowledge of classes and objects',
    language: 'Java',
    questions: 10,
    completed: true,
    score: 85,
  },
  {
    id: 2,
    title: 'Java OOP Quiz 2',
    description: 'Inheritance and polymorphism concepts',
    language: 'Java',
    questions: 12,
    completed: false,
    score: null,
  },
  {
    id: 3,
    title: 'Python OOP Quiz 1',
    description: 'Classes and instances in Python',
    language: 'Python',
    questions: 8,
    completed: true,
    score: 92,
  },
  {
    id: 4,
    title: 'PHP OOP Quiz 1',
    description: 'PHP classes and properties',
    language: 'PHP',
    questions: 10,
    completed: false,
    score: null,
  },
  {
    id: 5,
    title: 'C# OOP Quiz 1',
    description: 'C# classes and objects',
    language: 'C#',
    questions: 9,
    completed: false,
    score: null,
  },
];

export default function QuizzesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Quizzes</h1>
        <p className="text-slate-400 mt-1">Test your knowledge after each lesson</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="border-slate-800 bg-slate-900/80 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white">{quiz.title}</CardTitle>
                  <CardDescription className="text-slate-400 mt-1">{quiz.description}</CardDescription>
                </div>
                {quiz.completed && (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  {quiz.language}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <FileText className="h-4 w-4" />
                  {quiz.questions} questions
                </div>
              </div>
              {quiz.completed && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Your Score</span>
                    <span className="text-lg font-bold text-green-500">{quiz.score}%</span>
                  </div>
                </div>
              )}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                variant={quiz.completed ? 'outline' : 'default'}
              >
                {quiz.completed ? 'Review Quiz' : 'Start Quiz'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

