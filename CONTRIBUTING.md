# Contributing to SyntaxUI

Thank you for your interest in contributing to SyntaxUI! I welcome contributions from the community to help improve and enhance SyntaxUI.

## Getting Started

To get started with contributing to SyntaxUI, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine using `git clone`.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server with `npm run dev`.

## Guidelines for Contributions

When contributing to SyntaxUI, please follow these guidelines:

### Coding Standards

- Adhere to the existing codebase's style, formatting, and naming conventions.
- Naming Conventions:
  - Folders: Use camelCase (first letter lowercase).
  - Component (tsx): Follow React's convention using PascalCase (first letter uppercase).
  - Other: Use camelCase (first letter lowercase).
    - Hooks: make sure the first word of your hook is 'use' (ex: useState)

### Commit Messages

Use the following conventions for commit messages:

- feat: New features
- fix: Bug fixes
- docs: Documentation-only changes
- style: Code formatting changes (whitespace, missing semi-colons, etc.)
- refactor: Code changes that neither fix a bug nor add a feature
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries (e.g., documentation generation)

### Code Quality

- Ensure your code is properly tested and does not introduce new bugs.

### Adding a animation, component, effect, or hook

#### Before you create your pull request

Make sure to create an issue for feature that you would like to contribute.

This will help in the following ways:

- If a similar feature is currently under development, we will not have duplicates
- If a similar feature has already been implemented and removed, it will save you time
- It will help us stay aware of what our _awesome_ contributors are working on

#### Where should you add the feature?

If you are adding a new feature then please add it in the appropriate folder in `src/showcase`. For example, if you are making a `NewToggle` component then you would add it to `src/showcase/components/toggle/NewToggle.tsx`

```
src/
└─ showcase/
    ├─ animations/
    ├─ components/
    │  └─ toggle/
    │     └─ NewToggle.tsx
    ├─ effects/
    └─ hooks/
```

#### How to get it displayed on the site?

##### Creating page in `docs`

In `src/app/docs/` we have the following folder layout that we use to separate out the major feature types.

```
src/app/docs/
├─ animations/
├─ components/
├─ effects/
└─ hooks/
```

Within these, we further distinguish between minor feature types using appropriate groups based on the type of feature and the specific name of the feature. For example, the HeartbeatButton is in `components/button/heartbeat-button/`. Note: within `docs/`, folder names use kebab case.

When creating a page for a specific feature, we use [mdx](https://mdxjs.com/). For example, the docs page for HearbeatButton will look like this.

```
heartbeat-button/
└─ page.mdx
```

Please use other `page.mdx` files as guides when creating a new page.

##### ComponentPreview

`<ComponentPreview>` is a component that we made that makes it very simple to add in the preview/code tab group that you see on most of our docs.

You can use it by passing in a `path` that is relative to `src/showcase/`.

For example, if we wanted to display a tab for a preview of our HeartbeatButton component and a tab for the code of that button we would add `<ComponentPreview path="components/button/HeartbeatButton" />` into the appropriate `page.mdx`.

## Reporting Bugs

If you encounter any bugs or issues while using SyntaxUI, please report them by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). When reporting a bug, please provide a clear description of the problem, steps to reproduce it, and any relevant code snippets or error messages.

## Feature Requests

If you have an idea for a new feature or improvement, I'd love to hear about it! Please submit your feature requests by opening an issue on the [GitHub issue tracker](https://github.com/Ansub/syntaxUI/issues). Provide a detailed description of the feature, its benefits, and any relevant use cases.

## Other Questions

If you have any other questions or need help, feel free to create or comment on an [issue on GitHub](https://github.com/Ansub/syntaxUI/issues) or [join our Discord](https://discord.gg/P8GXYyH3ZU).

## License

By contributing to SyntaxUI, you agree that your contributions will be licensed under the [MIT License](https://opensource.org/licenses/MIT).
