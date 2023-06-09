import React from 'react';

const DashBoard = () => {
    return (
        <div>
            <div className="flex">
                <nav className="bg-gray-800 w-64 px-6 py-8">
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Dashboard</h2>
                    </div>
                    <div className="space-y-2">
                        <SidebarLink to="/student" title="Student" />
                        <SidebarLink to="/admin" title="Admin" />
                        <SidebarLink to="/instructor" title="Instructor" />
                    </div>
                </nav>
                <div className="flex-1 p-8">
                    {/* Main content */}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;