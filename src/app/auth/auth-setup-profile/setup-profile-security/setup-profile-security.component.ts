import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FIELD_ERORRS } from 'src/app/app.constants';
import { AUTH_SECURITY_QUESTIONS_CONSTANTS } from '../../auth-security-questions/auth-security-questions.constants';
import { Subject } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Router } from '@angular/router';
import { SecurityQuestion } from '../../auth-security-questions/models/security-question.model';
import { postQuestions, getQuestions } from '../../store/auth.actions';
import { AuthActions } from '../../store/action-types';
import { takeUntil } from 'rxjs/operators';
import { SelectOption } from 'src/app/shared/models/select-option.model';
import { MOCK_QUESTIONS } from './mock-questions';

@Component({
  selector: 'setup-profile-security',
  templateUrl: './setup-profile-security.component.html',
  styleUrls: ['./setup-profile-security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupProfileSecurityComponent implements OnInit {
  public constants = AUTH_SECURITY_QUESTIONS_CONSTANTS;
  public form: FormGroup;
  public isPasswordVisible: boolean;
  public loading: boolean;
  public questionsArray: FormArray;
  public questions: SelectOption[] = MOCK_QUESTIONS;
  private _onDestroy$ = new Subject<void>();
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._getQuestions();
    this._initForm();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
  }

  public onSubmit(): void {
    if (!this.form.valid) { return; }
    this._setLoading(true);
    const questions: SecurityQuestion[] = this.form.value.questions;
    this._store.dispatch(postQuestions({payload:questions}));
  }

  public get questionsComponents() { return (<FormArray>this.form.get('questions') as any).controls; }

  private _initForm(): void {
    this.form = new FormGroup({
      'questions': this._formBuilder.array([])
    });
    this._createQuestionsField();
    this._setLoading(false);
  }

  private _createQuestionsField():void {
    this._createQuestionField();
    this._createQuestionField();
  }

  private _createQuestionField():void  {
    this.questionsArray = this.form.get('questions') as FormArray;
    this.questionsArray.push(this._createItem());
  }

  private _createItem(): FormGroup {
    return this._formBuilder.group({
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required)
    });
  }

  private _getQuestions() {
      this._setLoading(true);
      this._store.dispatch(getQuestions());
  }

  private _setLoading(loading: boolean): void {
    this.loading = loading;
    this._changeRef.detectChanges();
  }

}
