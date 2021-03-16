export default class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  afforability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredient: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegeterian: boolean;
  isLactoseFree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    afforability: string,
    complexity: string,
    imageUrl: string,
    duration: string,
    ingredient: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegeterian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.afforability = afforability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredient = ingredient;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLactoseFree = isLactoseFree;
  }
}
