import React, { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function LayoutDesigns() {
  const [viewMode, setViewMode] = useState('desktop');

  const DesktopLayout = () => (
    <div className="bg-white p-8 rounded-lg shadow-2xl" style={{ width: '1200px' }}>
      <div className="text-center mb-4 text-sm font-bold text-gray-600">DESKTOP LAYOUT (Min 950px)</div>
      
      {/* Header Container */}
      <div className="border-4 border-purple-600 p-4 mb-4 bg-purple-50">
        <div className="text-xs font-bold text-purple-700 mb-2">&lt;header&gt;</div>
        <div className="bg-white border-2 border-purple-400 p-3 text-center">
          <div className="font-bold text-lg">✨ SparkleClean</div>
          <div className="text-xs text-gray-600">Premium Dry Cleaning & Laundry Services</div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="border-4 border-blue-600 p-4 mb-4 bg-blue-50">
        <div className="text-xs font-bold text-blue-700 mb-2">&lt;div class="nav-tabs"&gt;</div>
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Login/Register
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Services
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Cart (0)
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Checkout
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            About Us
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="border-4 border-green-600 p-4 bg-green-50">
        <div className="text-xs font-bold text-green-700 mb-2">&lt;div class="container"&gt;</div>
        
        {/* Content Section */}
        <div className="border-4 border-orange-600 p-4 bg-orange-50">
          <div className="text-xs font-bold text-orange-700 mb-2">&lt;div class="content-section active"&gt;</div>
          
          {/* Card Container */}
          <div className="border-4 border-red-600 p-4 bg-red-50">
            <div className="text-xs font-bold text-red-700 mb-3">&lt;div class="card"&gt;</div>
            
            {/* Example: Services Grid */}
            <div className="mb-4">
              <div className="bg-white border-2 border-gray-400 p-2 mb-2 text-center font-bold text-sm">
                Section Title (h2)
              </div>
              
              <div className="border-4 border-yellow-600 p-3 bg-yellow-50">
                <div className="text-xs font-bold text-yellow-700 mb-2">&lt;div class="products-grid"&gt;</div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="bg-white border-2 border-yellow-400 p-2">
                      <div className="text-center">
                        <div className="text-xs mb-1">👕</div>
                        <div className="text-xs font-semibold">Item {i}</div>
                        <div className="text-xs text-gray-600">$10.00</div>
                        <div className="bg-blue-500 text-white text-xs py-1 mt-1 rounded">Add</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section Example */}
            <div className="border-4 border-pink-600 p-3 bg-pink-50">
              <div className="text-xs font-bold text-pink-700 mb-2">&lt;div class="grid-2"&gt; (Form Container)</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white border-2 border-gray-400 p-2">
                  <div className="text-xs font-semibold mb-1">Input Label</div>
                  <div className="bg-gray-100 border border-gray-300 p-1 text-xs">[Input Field]</div>
                </div>
                <div className="bg-white border-2 border-gray-400 p-2">
                  <div className="text-xs font-semibold mb-1">Input Label</div>
                  <div className="bg-gray-100 border border-gray-300 p-1 text-xs">[Input Field]</div>
                </div>
              </div>
              <div className="bg-blue-600 text-white text-center py-2 mt-2 text-xs font-bold rounded">
                SUBMIT BUTTON
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-100 rounded border-2 border-gray-400">
        <div className="text-xs font-bold mb-2">DIV STRUCTURE LEGEND:</div>
        <div className="grid grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-purple-600 bg-purple-50"></div>
            <span>&lt;header&gt;</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-blue-600 bg-blue-50"></div>
            <span>.nav-tabs</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-green-600 bg-green-50"></div>
            <span>.container</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-orange-600 bg-orange-50"></div>
            <span>.content-section</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-red-600 bg-red-50"></div>
            <span>.card</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-yellow-600 bg-yellow-50"></div>
            <span>.products-grid</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border-2 border-pink-600 bg-pink-50"></div>
            <span>.grid-2 (forms)</span>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-300 rounded">
        <div className="text-xs font-bold mb-1">📐 DESKTOP SPECIFICATIONS:</div>
        <div className="text-xs space-y-1">
          <div>• Minimum width: 950px</div>
          <div>• Navigation: Horizontal tabs (5 columns)</div>
          <div>• Products grid: 4 columns</div>
          <div>• Form inputs: 2 columns (grid-2 class)</div>
          <div>• Full-width container with padding</div>
          <div>• Nested div structure for responsive layout</div>
        </div>
      </div>
    </div>
  );

  const MobileLayout = () => (
    <div className="bg-white p-6 rounded-lg shadow-2xl" style={{ width: '375px' }}>
      <div className="text-center mb-4 text-sm font-bold text-gray-600">MOBILE LAYOUT (Min 600px)</div>
      
      {/* Header Container */}
      <div className="border-4 border-purple-600 p-3 mb-3 bg-purple-50">
        <div className="text-xs font-bold text-purple-700 mb-2">&lt;header&gt;</div>
        <div className="bg-white border-2 border-purple-400 p-2 text-center">
          <div className="font-bold text-sm">✨ SparkleClean</div>
          <div className="text-xs text-gray-600">Premium Services</div>
        </div>
      </div>

      {/* Navigation Container - Stacked */}
      <div className="border-4 border-blue-600 p-3 mb-3 bg-blue-50">
        <div className="text-xs font-bold text-blue-700 mb-2">&lt;div class="nav-tabs"&gt;</div>
        <div className="space-y-1">
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Login/Register
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Services
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Cart (0)
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            Checkout
          </div>
          <div className="bg-white border-2 border-blue-400 p-2 text-center text-xs font-semibold">
            About Us
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="border-4 border-green-600 p-3 bg-green-50">
        <div className="text-xs font-bold text-green-700 mb-2">&lt;div class="container"&gt;</div>
        
        {/* Content Section */}
        <div className="border-4 border-orange-600 p-3 bg-orange-50">
          <div className="text-xs font-bold text-orange-700 mb-2">&lt;div class="content-section active"&gt;</div>
          
          {/* Card Container */}
          <div className="border-4 border-red-600 p-3 bg-red-50">
            <div className="text-xs font-bold text-red-700 mb-2">&lt;div class="card"&gt;</div>
            
            {/* Example: Services Grid - Single Column */}
            <div className="mb-3">
              <div className="bg-white border-2 border-gray-400 p-2 mb-2 text-center font-bold text-xs">
                Section Title (h2)
              </div>
              
              <div className="border-4 border-yellow-600 p-2 bg-yellow-50">
                <div className="text-xs font-bold text-yellow-700 mb-2">&lt;div class="products-grid"&gt;</div>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white border-2 border-yellow-400 p-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-sm">👕</div>
                          <div>
                            <div className="text-xs font-semibold">Item {i}</div>
                            <div className="text-xs text-gray-600">$10.00</div>
                          </div>
                        </div>
                        <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded">Add</div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center text-xs text-gray-500 py-1">... more items ...</div>
                </div>
              </div>
            </div>

            {/* Form Section Example - Single Column */}
            <div className="border-4 border-pink-600 p-2 bg-pink-50">
              <div className="text-xs font-bold text-pink-700 mb-2">&lt;div class="grid-2"&gt; (Form)</div>
              <div className="space-y-2">
                <div className="bg-white border-2 border-gray-400 p-2">
                  <div className="text-xs font-semibold mb-1">Input Label</div>
                  <div className="bg-gray-100 border border-gray-300 p-1 text-xs">[Input Field]</div>
                </div>
                <div className="bg-white border-2 border-gray-400 p-2">
                  <div className="text-xs font-semibold mb-1">Input Label</div>
                  <div className="bg-gray-100 border border-gray-300 p-1 text-xs">[Input Field]</div>
                </div>
              </div>
              <div className="bg-blue-600 text-white text-center py-2 mt-2 text-xs font-bold rounded">
                SUBMIT BUTTON
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 p-3 bg-gray-100 rounded border-2 border-gray-400">
        <div className="text-xs font-bold mb-2">DIV STRUCTURE:</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-purple-600 bg-purple-50"></div>
            <span>&lt;header&gt;</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-blue-600 bg-blue-50"></div>
            <span>.nav-tabs</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-green-600 bg-green-50"></div>
            <span>.container</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-orange-600 bg-orange-50"></div>
            <span>.content-section</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-red-600 bg-red-50"></div>
            <span>.card</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-yellow-600 bg-yellow-50"></div>
            <span>.products-grid</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 border-2 border-pink-600 bg-pink-50"></div>
            <span>.grid-2 (forms)</span>
          </div>
        </div>
      </div>

      {/* Annotations */}
      <div className="mt-4 p-3 bg-blue-50 border-2 border-blue-300 rounded">
        <div className="text-xs font-bold mb-1">📱 MOBILE SPECIFICATIONS:</div>
        <div className="text-xs space-y-1">
          <div>• Minimum width: 600px</div>
          <div>• Navigation: Stacked vertical</div>
          <div>• Products: Single column list</div>
          <div>• Forms: Single column inputs</div>
          <div>• Touch-friendly tap targets</div>
          <div>• Same nested div structure</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SparkleClean Layout Designs</h1>
          <p className="text-gray-600 mb-4">UI/UX Layout with &lt;div&gt; Structure Mapping</p>
          
          {/* View Toggle */}
          <div className="inline-flex gap-2 bg-white p-2 rounded-lg shadow-md">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all ${
                viewMode === 'desktop'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Monitor size={20} />
              Desktop (950px+)
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all ${
                viewMode === 'mobile'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Smartphone size={20} />
              Mobile (600px+)
            </button>
          </div>
        </div>

        {/* Layout Display */}
        <div className="flex justify-center overflow-x-auto pb-8">
          {viewMode === 'desktop' ? <DesktopLayout /> : <MobileLayout />}
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-lg shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">HTML Structure Breakdown</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300 font-mono text-xs overflow-x-auto">
            <pre className="whitespace-pre">
{`<body>
  <div class="container">
    
    <header>                                    ← Purple border
      <h1>✨ SparkleClean</h1>
      <p>Premium Dry Cleaning & Laundry Services</p>
    </header>
    
    <div class="nav-tabs">                      ← Blue border
      <button class="tab-btn active">Login/Register</button>
      <button class="tab-btn">Services</button>
      <button class="tab-btn">Cart</button>
      <button class="tab-btn">Checkout</button>
      <button class="tab-btn">About Us</button>
    </div>
    
    <div id="auth" class="content-section active">   ← Orange border
      <div class="card">                              ← Red border
        
        <div class="auth-tabs">
          <button class="auth-tab-btn active">Login</button>
          <button class="auth-tab-btn">Register</button>
        </div>
        
        <div id="loginFormContainer">                 ← Pink border (forms)
          <div class="form-group">
            <label>Username</label>
            <input type="text">
          </div>
          <button type="submit">Login</button>
        </div>
        
      </div>
    </div>
    
    <div id="products" class="content-section">
      <div class="card">
        <h2>🧺 Our Services</h2>
        
        <div class="products-grid">                   ← Yellow border
          <div class="product-card">...</div>         (4 cols desktop, 1 col mobile)
          <div class="product-card">...</div>
        </div>
        
      </div>
    </div>
    
    <div id="checkout" class="content-section">
      <div class="card">
        <div class="grid-2">                          ← Pink border
          <div class="form-group">...</div>           (2 cols desktop, 1 col mobile)
          <div class="form-group">...</div>
        </div>
      </div>
    </div>
    
  </div>
</body>`}
            </pre>
          </div>

          {/* Key Differences Table */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Desktop vs Mobile Layout Differences</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-gray-300">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Element</th>
                    <th className="border border-gray-300 p-3 text-left">Desktop (950px+)</th>
                    <th className="border border-gray-300 p-3 text-left">Mobile (600px+)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-3 font-semibold">.nav-tabs</td>
                    <td className="border border-gray-300 p-3">Horizontal flex row (5 columns)</td>
                    <td className="border border-gray-300 p-3">Vertical stack (full width)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">.products-grid</td>
                    <td className="border border-gray-300 p-3">4-column grid</td>
                    <td className="border border-gray-300 p-3">Single column list</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-3 font-semibold">.grid-2 (forms)</td>
                    <td className="border border-gray-300 p-3">2-column grid side-by-side</td>
                    <td className="border border-gray-300 p-3">Single column stacked</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">.cart-item</td>
                    <td className="border border-gray-300 p-3">Horizontal layout with controls</td>
                    <td className="border border-gray-300 p-3">Stacked with larger tap targets</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-3 font-semibold">Padding/Spacing</td>
                    <td className="border border-gray-300 p-3">Larger margins and padding</td>
                    <td className="border border-gray-300 p-3">Compact spacing, full width</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">📝 Implementation Notes:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ All div groups are color-coded and labeled in the layouts</li>
            <li>✅ Desktop minimum width: 950px</li>
            <li>✅ Mobile minimum width: 600px</li>
            <li>✅ Responsive design uses CSS media queries to switch layouts</li>
            <li>✅ Same HTML structure adapts to different screen sizes</li>
            <li>✅ Mobile-first approach with touch-friendly tap targets</li>
            <li>✅ Maintains visual hierarchy across all breakpoints</li>
          </ul>
        </div>
      </div>
    </div>
  );
}