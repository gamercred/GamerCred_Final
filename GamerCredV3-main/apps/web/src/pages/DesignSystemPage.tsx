import { Avatar, Button, Card, Input, Textarea } from '@/components/ui';

/**
 * /design route — temporary visual smoke test for the new design system.
 * Delete this file once design system is verified and real pages exist.
 */
export default function DesignSystemPage() {
  return (
    <div className="social-app min-h-screen bg-surface p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        <header>
          <h1 className="text-4xl">
            <span className="text-fg">Gamer</span>
            <span className="text-brand">Cred</span>
            <span className="text-fg-muted ml-3 text-lg font-normal">Design system</span>
          </h1>
          <p className="text-fg-muted mt-2">
            Smoke test for Phase 0. If everything here renders correctly, the foundation is good.
          </p>
        </header>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Typography</h2>
          <Card>
            <h1 className="text-5xl">Heading 1 — Level Up</h1>
            <h2 className="mt-3 text-3xl">Heading 2 — Your Gaming Life</h2>
            <h3 className="mt-3 text-2xl">Heading 3 — Connect. Share. Compete.</h3>
            <p className="mt-4 text-fg">
              Body text in Inter. Quick brown fox jumps over the lazy dog. 0123456789.
            </p>
            <p className="mt-2 text-fg-muted text-sm">Muted secondary text — captions, labels.</p>
            <p className="mt-2 text-fg-dim text-xs">Dim tertiary text — timestamps, helpers.</p>
            <p className="mt-4">
              <span className="num text-2xl text-fg">8,240</span>
              <span className="text-fg-muted ml-2">Cred Score (JetBrains Mono)</span>
            </p>
            <h2 className="mt-6 text-3xl">
              <span className="brand-gradient">Brand gradient text</span>
            </h2>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Buttons</h2>
          <Card>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary">Explore</Button>
                <Button variant="ghost">Cancel</Button>
                <Button variant="danger">Delete</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled primary</Button>
                <Button variant="secondary" disabled>Disabled secondary</Button>
              </div>
              <Button fullWidth>Full width button</Button>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Avatars</h2>
          <Card>
            <div className="flex flex-wrap items-end gap-4">
              <Avatar size="xs" fallback="A" />
              <Avatar size="sm" fallback="B" />
              <Avatar size="md" fallback="C" />
              <Avatar size="lg" fallback="D" />
              <Avatar size="xl" fallback="E" />
            </div>
            <div className="mt-4 flex flex-wrap items-end gap-4">
              <Avatar size="md" fallback="On" online />
              <Avatar size="md" fallback="Vf" verified />
              <Avatar size="lg" fallback="Bo" online verified />
              <Avatar
                size="lg"
                src="https://avatars.steamstatic.com/b48123f145ec156479c6fba2d14e2c07f8d4bff5_full.jpg"
                alt="Steam avatar test"
                online
              />
            </div>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Cards</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card padding="sm">
              <h3 className="text-fg">Small padding</h3>
              <p className="text-fg-muted text-sm mt-1">For sidebar tiles.</p>
            </Card>
            <Card padding="md">
              <h3 className="text-fg">Medium padding</h3>
              <p className="text-fg-muted text-sm mt-1">Default for posts.</p>
            </Card>
            <Card padding="lg" interactive>
              <h3 className="text-fg">Large + interactive</h3>
              <p className="text-fg-muted text-sm mt-1">Hover for lift effect.</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Inputs</h2>
          <Card>
            <div className="space-y-3">
              <Input placeholder="Default input" />
              <Input placeholder="With error state" error />
              <Input placeholder="Disabled" disabled />
              <Textarea placeholder="What's on your mind, gamer?" rows={3} />
            </div>
          </Card>
        </section>

        <section>
          <h2 className="mb-4 text-2xl text-fg">Color palette</h2>
          <Card>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Swatch name="surface" color="#0A0A0F" />
              <Swatch name="surface.elevated" color="#13131A" />
              <Swatch name="surface.overlay" color="#1A1A24" />
              <Swatch name="line" color="#1F1F2A" />
              <Swatch name="brand" color="#7C3AED" />
              <Swatch name="brand.glow" color="#A78BFA" />
              <Swatch name="like (pink)" color="#EC4899" />
              <Swatch name="ok (green)" color="#10B981" />
            </div>
          </Card>
        </section>

        <footer className="border-t border-line pt-4 text-fg-dim text-xs">
          Phase 0 complete when every element above renders correctly.
        </footer>
      </div>
    </div>
  );
}

function Swatch({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 rounded-button border border-line"
        style={{ backgroundColor: color }}
      />
      <div className="text-xs">
        <div className="text-fg font-medium">{name}</div>
        <div className="text-fg-dim num">{color}</div>
      </div>
    </div>
  );
}
