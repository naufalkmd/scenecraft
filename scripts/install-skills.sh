#!/usr/bin/env bash
# Installs scenecraft's curated skill bundle into a target project's
# .claude/skills/, as real files (not symlinks) so the target repo owns its
# own copy independent of this one. Every skill under .claude/skills/ here
# (including the nested-symlink trees some ux-ui-agent-skills skills use for
# their shared dependency files) is dereferenced recursively by `cp -RL`, so
# no per-skill special-casing is needed.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET="${1:-.}"
DEST="$TARGET/.claude/skills"

mkdir -p "$DEST"
cp -RL "$REPO_ROOT/.claude/skills/." "$DEST/"

cat > "$DEST/SKILLS-SOURCES.md" <<'EOF'
# Skill sources

Provenance for the skills installed by `install-skills.sh`. See
[scenecraft/SKILLS.md](https://github.com/naufalkmd/scenecraft/blob/main/SKILLS.md)
for why each was chosen over its alternatives.

| Skill | Source |
|---|---|
| threejs-engineering | scenecraft (this bundle's own skill) |
| web-motion | scenecraft (this bundle's own skill) |
| genmedia | fal-ai-community/skills |
| fal-models-catalog | fal-ai-community/skills |
| fal-recipes | fal-ai-community/skills |
| fal-workflow | fal-ai-community/skills |
| fal-prompting | fal-ai-community/skills |
| fal-gamedev | fal-ai-community/skills |
| fal-redesign | fal-ai-community/skills |
| fal-regenerate-3d | fal-ai-community/skills |
| character-design | fal-ai-community/skills |
| cinematography | fal-ai-community/skills |
| commercial | fal-ai-community/skills |
| fan-cam | fal-ai-community/skills |
| marketing | fal-ai-community/skills |
| model-routing | fal-ai-community/skills |
| storytelling | fal-ai-community/skills |
| ugc | fal-ai-community/skills |
| frontend-design | anthropics/skills |
| webapp-testing | anthropics/skills |
| accessible-animation | iart-ai/web-animation-skills |
| micro-interaction | iart-ai/web-animation-skills |
| gsap-web | iart-ai/web-animation-skills |
| 60fps-animation | iart-ai/web-animation-skills |
| ascii-animation | iart-ai/web-animation-skills |
| glassmorphism | iart-ai/web-animation-skills |
| lottie-animation | iart-ai/web-animation-skills |
| page-transition-animation | iart-ai/web-animation-skills |
| svg-animation | iart-ai/web-animation-skills |
| a11y-audit | plugin87/ux-ui-agent-skills |
| apply-aesthetic | plugin87/ux-ui-agent-skills |
| design-code | plugin87/ux-ui-agent-skills |
| design-component | plugin87/ux-ui-agent-skills |
| design-qa | plugin87/ux-ui-agent-skills |
| design-review | plugin87/ux-ui-agent-skills |
| figma-integration | plugin87/ux-ui-agent-skills |
| governance | plugin87/ux-ui-agent-skills |
| image-to-code | plugin87/ux-ui-agent-skills |
| migrate-design-system | plugin87/ux-ui-agent-skills |
| performance | plugin87/ux-ui-agent-skills |
| prototype | plugin87/ux-ui-agent-skills |
| redesign | plugin87/ux-ui-agent-skills |
| ux-writing | plugin87/ux-ui-agent-skills |
| shadcn | official shadcn CLI installer |
| migrate-radix-to-base | bundled with the shadcn install |
EOF

COUNT="$(find "$DEST" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')"
echo "Installed $COUNT skills into $DEST"
echo
echo "Reminders:"
echo "  - genmedia-backed skills (genmedia, fal-models-catalog, fal-recipes, fal-workflow,"
echo "    fal-prompting, fal-gamedev, fal-redesign, fal-regenerate-3d, character-design,"
echo "    cinematography, commercial, fan-cam, marketing, model-routing, storytelling, ugc)"
echo "    need the genmedia CLI (curl https://genmedia.sh/install -fsS | bash) and a FAL_KEY set."
echo "  - shadcn and migrate-radix-to-base assume a shadcn-based project."
