import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Pill,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  Package,
  AlertTriangle,
  Users,
  Clock,
  FileText,
  CheckCircle2,
} from "lucide-react"

export default function PillCountPlus() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Pill className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">Pill Count Plus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </a>
              <a href="#compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                Compliance
              </a>
              <Button>Request Access</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-transparent bg-clip-text border border-blue-500/20 hover:border-purple-500/20">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Built for Veterinary Professionals
            </span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Medication Inventory Management for Veterinary Clinics
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            Efficiently count, track, and manage your pharmacy inventory. Stay DEA compliant with comprehensive audit
            trails and controlled substance tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
            >
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-transparent">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">99.9%</p>
              <p className="text-muted-foreground">Count Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">50%</p>
              <p className="text-muted-foreground">Time Saved on Audits</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-muted-foreground">DEA Compliant</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">24/7</p>
              <p className="text-muted-foreground">Real-time Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Inventory Control
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From daily pill counts to DEA compliance, manage your entire pharmacy workflow in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Manual Pill Count</CardTitle>
                <CardDescription>
                  Simple, intuitive forms to log counts with automatic timestamp and user attribution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Quick count entry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    User attribution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Discrepancy flagging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Inventory Management</CardTitle>
                <CardDescription>
                  Track stock levels, reorder points, and par levels across your entire inventory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Lot number tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Expiration management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Low stock alerts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Controlled Substances</CardTitle>
                <CardDescription>
                  Special handling for Schedule II-V drugs with witness signatures and DEA form support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    DEA 222 form support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Witness signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Schedule tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Dispensing Log</CardTitle>
                <CardDescription>
                  Record medications dispensed to patients with complete owner and pet information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Patient records
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Owner information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Quantity tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Reports & Analytics</CardTitle>
                <CardDescription>
                  Generate usage reports, variance reports, and inventory valuation for audits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    PDF/CSV export
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Variance reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Audit-ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow border-t-2 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Smart Alerts</CardTitle>
                <CardDescription>
                  Get notified about low stock, expiring medications, and count discrepancies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Low stock warnings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    Expiration alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                    FEFO tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Product Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building Pill Count Plus in phases to deliver value at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <Badge className="w-fit mb-2">Phase 1</Badge>
                <CardTitle className="text-foreground">Core Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Staff authentication</li>
                  <li>Medication database</li>
                  <li>Manual pill counts</li>
                  <li>Basic dashboard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Phase 2
                </Badge>
                <CardTitle className="text-foreground">Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Stock levels & reorder points</li>
                  <li>Receiving & lot tracking</li>
                  <li>Dispensing log</li>
                  <li>Audit trail</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Phase 3
                </Badge>
                <CardTitle className="text-foreground">Reporting & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Controlled substance tracking</li>
                  <li>DEA 222 form support</li>
                  <li>Expiration management</li>
                  <li>Export to PDF/CSV</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Phase 4
                </Badge>
                <CardTitle className="text-foreground">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Barcode/QR scanning</li>
                  <li>Multi-location support</li>
                  <li>Patient integration</li>
                  <li>Smart reorder suggestions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">DEA Compliant</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Built for Compliance from Day One</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Pill Count Plus is designed with veterinary pharmacy regulations in mind. Every count, adjustment, and
                dispensing action is logged with complete audit trails, making your next DEA inspection a breeze.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Complete Audit Trail</h3>
                    <p className="text-muted-foreground text-sm">
                      Every action timestamped with user attribution for full accountability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Role-Based Access</h3>
                    <p className="text-muted-foreground text-sm">
                      Separate permissions for Admins, Veterinarians, and Technicians.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Witness Signatures</h3>
                    <p className="text-muted-foreground text-sm">
                      Required dual signatures for controlled substance counts and adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">Recent Audit Log</h3>
                  <Badge variant="outline">Live</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Dr. Smith counted Rimadyl 75mg</span>
                    <span className="text-muted-foreground ml-auto">2m ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Tech Jane received Metacam shipment</span>
                    <span className="text-muted-foreground ml-auto">15m ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-chart-5 rounded-full" />
                    <span className="text-muted-foreground">Tramadol count verified (witness: Dr. Lee)</span>
                    <span className="text-muted-foreground ml-auto">1h ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Dispensed Apoquel to Max (Owner: Johnson)</span>
                    <span className="text-muted-foreground ml-auto">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Streamline Your Pharmacy Operations?</h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
            Join veterinary clinics who trust Pill Count Plus for accurate inventory management and DEA compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-background/30 text-background hover:bg-background/10 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/60 py-8 border-t border-background/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-background" />
              <span className="font-bold text-background">Pill Count Plus</span>
            </div>
            <p className="text-center md:text-right text-sm">
              © 2025 Pill Count Plus. Veterinary medication inventory management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
