import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Counter } from '@/components/Counter';
import { Form } from '@/components/Form';
import { UserList } from '@/components/UserList';
import { SaveButtonDemo } from '@/components/SaveButtonDemo';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200 p-6 md:p-12 lg:p-24 selection:bg-indigo-500/30 pb-32 font-sans">
      {/* Animated Dark Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <header className="text-center space-y-6 mb-24 px-4 mt-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-2 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full shadow-sm">
            Next-Gen Architecture
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white pb-2">
            The Testing <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">Suite</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mt-6">
            Experience fully tested, accessible, and deeply interactive React components designed with absolute pixel perfection.
          </p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Controls Section */}
          <div className="flex flex-col gap-10">
            <Card title="Interactive Controls">
              <div className="space-y-12">
                <div className="group/item">
                  <h3 className="text-xs font-bold text-indigo-400 mb-5 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-indigo-400 rounded-full transition-all group-hover/item:w-10"></span> Primary Action
                  </h3>
                  <SaveButtonDemo />
                </div>
                <div className="group/item">
                  <h3 className="text-xs font-bold text-indigo-400 mb-5 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-indigo-400 rounded-full transition-all group-hover/item:w-10"></span> State Management
                  </h3>
                  <Counter />
                </div>
              </div>
            </Card>
          </div>

          {/* Form Section */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            <Card title="User Registration">
              <div className="space-y-6">
                <p className="text-sm text-slate-400 leading-relaxed font-medium">Create a new account below. Observe the floating labels and success state animations.</p>
                <Form />
              </div>
            </Card>
          </div>

          {/* Data Section */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            <Card title="Live Server Feed">
              <div className="space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">Fetching real-time profile data via mocked API simulation. Real avatars automatically generated.</p>
                <UserList />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </main>
  );
}
